import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import ts from 'typescript';

const source = readFileSync(new URL('../src/lib/qec-model-zoo.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { datasets, filterDatasets } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
const all = { code: 'all', distance: 'all', platform: 'all' };
const titles = (selection) => filterDatasets(datasets, { ...all, ...selection }).map((dataset) => dataset.title);

test('the unfiltered benchmark includes the nine supplied real-device datasets', () => {
  assert.equal(filterDatasets(datasets, all).length, 9);
  assert.equal(new Set(datasets.map((dataset) => dataset.id)).size, 9);
  assert.deepEqual(titles({ code: 'surface' }), ['Google Surface D3', 'Google Surface D5', 'Lukin D3', 'Lukin D5']);
  assert.deepEqual(titles({ code: 'color' }), ['Google Color D3', 'Google Color D5']);
});

test('code, distance, and platform filters combine independently', () => {
  assert.deepEqual(titles({ code: 'surface', distance: '3', platform: 'neutral-atoms' }), ['Lukin D3']);
  assert.deepEqual(titles({ distance: '3', platform: 'superconducting' }), ['Google Surface D3', 'Google Color D3', 'DiCarlo D3']);
  assert.deepEqual(titles({ distance: '25' }), ['Google Repetition D25']);
});

test('parity checks support the not-applicable code distance', () => {
  assert.deepEqual(titles({ code: 'parity', distance: 'none', platform: 'spin-qubit' }), ['Vandersypen']);
});

test('incompatible selections are empty, and resetting restores every dataset', () => {
  assert.deepEqual(titles({ code: 'color', platform: 'neutral-atoms' }), []);
  assert.deepEqual(titles({ code: 'surface', distance: '25' }), []);
  assert.equal(filterDatasets(datasets, all).length, 9);
});
