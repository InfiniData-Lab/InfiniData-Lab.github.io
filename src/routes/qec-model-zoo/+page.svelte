<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { datasets, filterDatasets, type DatasetSelection } from '$lib/qec-model-zoo';

	let selection: DatasetSelection = $state({ code: 'all', distance: 'all', platform: 'all' });
	const visibleDatasets = $derived(filterDatasets(datasets, selection));

	function resetFilters() {
		selection = { code: 'all', distance: 'all', platform: 'all' };
	}
</script>

<Seo
	title="QEC Model Zoo"
	description="Explore the QEC Model Zoo from Infinidata Lab: nine real quantum error correction datasets, 11 decoder methods, pre-decoders, and reusable model checkpoints. Accepted at NeurIPS 2026."
/>

<svelte:head>
	<link rel="canonical" href="https://infinidata-lab.github.io/qec-model-zoo" />
	<meta property="og:url" content="https://infinidata-lab.github.io/qec-model-zoo" />
</svelte:head>

<!-- Content and visual design adapted from the supplied standalone HTML page.
     The shared layout supplies navigation, footer, fonts, and theme controls. -->
<div class="qec-page">
<header class="qec-hero" aria-labelledby="page-title">
    <div class="container qec-hero-grid">
      <div class="hero-copy">
        <span class="hero-eyebrow">Infinidata Lab · Research benchmark</span>
        <h1 id="page-title">Benchmarking QEC decoders <span class="grad-text">across codes.</span></h1>
        <p class="hero-lead">Quantum error correction (QEC) uses measurement data to detect and correct errors in quantum computations. The <strong>QEC Model Zoo</strong> provides a common benchmark for fair comparisons of AI-based decoders and established baselines across different QEC codes and real-device datasets.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#datasets">Explore the datasets <span aria-hidden="true">↗</span></a>
          <a class="btn btn-ghost" href="#decoders">Explore the decoders <span aria-hidden="true">→</span></a>
        </div>
        <p class="publication-status"><strong>Accepted at NeurIPS 2026.</strong> The paper is not yet available.</p>
        <div class="hero-stats" aria-label="Benchmark at a glance">
          <div class="hero-stat"><strong>09</strong><span>Real datasets</span></div>
          <div class="hero-stat"><strong>11</strong><span>Decoder methods</span></div>
          <div class="hero-stat"><strong class="cross-code">Cross-code</strong><span>One benchmark</span></div>
        </div>
      </div>
      <div class="benchmark-visual" role="img" aria-label="Conceptual benchmark comparison: QEC measurement data is evaluated with AI-based decoders and classical baselines under shared conditions.">
        <div class="visual-head"><span>QEC / Shared benchmark</span><span class="visual-id">MODEL ZOO</span></div>
        <div class="visual-layout" aria-hidden="true">
          <div class="signal-panel">
            <div class="panel-label"><span>QEC measurement data</span><span>Measurements</span></div>
            <div class="signal-grid"><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot active"></span><span class="signal-dot"></span><span class="signal-dot active"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot active"></span><span class="signal-dot purple"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot active"></span><span class="signal-dot"></span><span class="signal-dot purple"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot active"></span><span class="signal-dot"></span><span class="signal-dot active"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot purple"></span><span class="signal-dot"></span><span class="signal-dot active"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot active"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot purple"></span><span class="signal-dot"></span><span class="signal-dot active"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot active"></span><span class="signal-dot"></span><span class="signal-dot purple"></span><span class="signal-dot"></span><span class="signal-dot active"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot purple"></span><span class="signal-dot"></span><span class="signal-dot active"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot active"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot purple"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot active"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot purple"></span><span class="signal-dot active"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot active"></span><span class="signal-dot"></span><span class="signal-dot purple"></span><span class="signal-dot"></span><span class="signal-dot active"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot"></span><span class="signal-dot"></span></div>
          </div>
          <div class="flow-connector"><svg width="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M14 1v24m-5-6 5 6 5-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 4" /></svg></div>
          <div class="process-panel">
            <div class="process-stage"><span class="stage-kicker">Model family</span><h3>AI-based decoders</h3><p>Data-driven decoding approaches.</p></div>
            <div class="process-stage secondary"><span class="stage-kicker">Baselines</span><h3>Classical decoders</h3><p>Established reference methods.</p></div>
          </div>
          <div class="flow-connector"><svg width="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M14 1v24m-5-6 5 6 5-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 4" /></svg></div>
          <div class="output-panel"><span class="output-icon">✓</span><span><strong>Comparable evaluations</strong><small>One consistent benchmark</small></span></div>
        </div>
        <div class="visual-foot">Simplified illustration · not experimental results</div>
      </div>
    </div>
  </header>

  <section class="section intro-section" aria-labelledby="intro-title">
    <div class="container intro-layout">
      <div>
        <span class="eyebrow section-kicker">The idea</span>
        <h2 id="intro-title">Different approaches. <span class="grad-text">Consistent evaluation.</span></h2>
        <p class="intro-text">A QEC decoder interprets measurements to infer likely errors and determine appropriate corrections. Comparing decoders across devices and code families requires a common evaluation setting. The model zoo provides that basis for reproducible, methodologically consistent comparisons.</p>
      </div>
      <div class="intro-stack">
        <article class="intro-item"><span class="intro-number">01</span><div><h3>Fair comparisons</h3><p>Assess AI-based decoders alongside established classical methods using a common benchmark.</p></div></article>
        <article class="intro-item"><span class="intro-number">02</span><div><h3>Real hardware datasets</h3><p>Evaluate methods on experimental datasets spanning multiple code families and hardware platforms.</p></div></article>
        <article class="intro-item"><span class="intro-number">03</span><div><h3>Reusable research assets</h3><p>Access model checkpoints and explore pre-decoding techniques for efficient error correction.</p></div></article>
      </div>
    </div>
  </section>

  <section class="section datasets-section" id="datasets" aria-labelledby="datasets-title">
    <div class="container">
      <div class="qec-section-head">
        <div><span class="eyebrow section-kicker">01 / The data</span><h2 id="datasets-title">Nine datasets.<br><span class="grad-text">Real quantum hardware.</span></h2></div>
        <p class="section-summary">Experimental QEC data span surface, color, and repetition codes, plus parity-check experiments, across superconducting, neutral-atom, and spin-qubit platforms.</p>
      </div>
      <div class="dataset-filters" aria-label="Filter datasets">
        <div class="filter-group" role="group" aria-label="Code family">
          <span class="filter-heading">Code family</span>
          <div class="filter-row">
          <button type="button" class="filter-btn" data-filter-group="code" data-filter-value="all" aria-pressed={selection.code === 'all'} onclick={() => selection.code = 'all'}>All codes</button>
          <button type="button" class="filter-btn" data-filter-group="code" data-filter-value="surface" aria-pressed={selection.code === 'surface'} onclick={() => selection.code = 'surface'}>Surface</button>
          <button type="button" class="filter-btn" data-filter-group="code" data-filter-value="color" aria-pressed={selection.code === 'color'} onclick={() => selection.code = 'color'}>Color</button>
          <button type="button" class="filter-btn" data-filter-group="code" data-filter-value="repetition" aria-pressed={selection.code === 'repetition'} onclick={() => selection.code = 'repetition'}>Repetition</button>
          <button type="button" class="filter-btn" data-filter-group="code" data-filter-value="parity" aria-pressed={selection.code === 'parity'} onclick={() => selection.code = 'parity'}>Parity checks</button>
          </div>
        </div>
        <div class="filter-group" role="group" aria-label="Code distance">
          <span class="filter-heading">Code distance</span>
          <div class="filter-row">
          <button type="button" class="filter-btn" data-filter-group="distance" data-filter-value="all" aria-pressed={selection.distance === 'all'} onclick={() => selection.distance = 'all'}>All distances</button>
          <button type="button" class="filter-btn" data-filter-group="distance" data-filter-value="3" aria-pressed={selection.distance === '3'} onclick={() => selection.distance = '3'}>D3</button>
          <button type="button" class="filter-btn" data-filter-group="distance" data-filter-value="5" aria-pressed={selection.distance === '5'} onclick={() => selection.distance = '5'}>D5</button>
          <button type="button" class="filter-btn" data-filter-group="distance" data-filter-value="25" aria-pressed={selection.distance === '25'} onclick={() => selection.distance = '25'}>D25</button>
          <button type="button" class="filter-btn" data-filter-group="distance" data-filter-value="none" aria-pressed={selection.distance === 'none'} onclick={() => selection.distance = 'none'}>Not applicable</button>
          </div>
        </div>
        <div class="filter-group" role="group" aria-label="QEC platform">
          <span class="filter-heading">QEC platform</span>
          <div class="filter-row">
          <button type="button" class="filter-btn" data-filter-group="platform" data-filter-value="all" aria-pressed={selection.platform === 'all'} onclick={() => selection.platform = 'all'}>All platforms</button>
          <button type="button" class="filter-btn" data-filter-group="platform" data-filter-value="superconducting" aria-pressed={selection.platform === 'superconducting'} onclick={() => selection.platform = 'superconducting'}>Superconducting</button>
          <button type="button" class="filter-btn" data-filter-group="platform" data-filter-value="neutral-atoms" aria-pressed={selection.platform === 'neutral-atoms'} onclick={() => selection.platform = 'neutral-atoms'}>Neutral atoms</button>
          <button type="button" class="filter-btn" data-filter-group="platform" data-filter-value="spin-qubit" aria-pressed={selection.platform === 'spin-qubit'} onclick={() => selection.platform = 'spin-qubit'}>Spin qubits</button>
          </div>
        </div>
      </div>
      <div class="filter-summary">
        <p class="filter-status-text" id="filter-status" role="status" aria-live="polite" aria-atomic="true">Showing {visibleDatasets.length} of {datasets.length} datasets</p>
        <button type="button" class="filter-reset" id="reset-filters" onclick={resetFilters}>Reset filters</button>
      </div>
      <div class="dataset-grid" id="dataset-grid">
        {#each datasets as dataset (dataset.id)}
          <article class="dataset-card" data-category={dataset.category} data-distance={dataset.distance} data-platform={dataset.platform} aria-labelledby={`${dataset.id}-title`} hidden={!visibleDatasets.includes(dataset)}>
            <div class="dataset-card-top"><span class="dataset-symbol {dataset.symbolClass}" aria-hidden="true">{dataset.symbol}</span><span class="distance-badge">{dataset.distanceLabel}</span></div>
            <h3 id={`${dataset.id}-title`}>{dataset.title}</h3>
            <div class="dataset-kind">{dataset.code}</div>
            <p>{dataset.description}</p>
            <div class="dataset-meta"><span>{dataset.source}</span><span class="platform-chip">{dataset.platformLabel}</span></div>
          </article>
        {/each}
      </div>
      <p class="dataset-empty" id="dataset-empty" hidden={visibleDatasets.length !== 0}>No datasets match these filters. Select different criteria or reset the filters.</p>
      <p class="dataset-footnote">D3, D5, and D25 indicate code distance. The Vandersypen parity-check dataset does not have a code distance.</p>
      <aside class="sim-note" aria-labelledby="simulation-title">
        <span class="sim-icon" aria-hidden="true"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M7 14l3-4 3 2 4-5M7 17h10"/></svg></span>
        <div><h3 id="simulation-title">Simulated data, too</h3><p>Alongside the nine real-world datasets, the benchmark also uses simulated datasets associated with <strong>NVIDIA’s Ising-Decoding project</strong> and an <strong>NTU framework</strong> when evaluating their openly shared model weights on Hugging Face.</p></div>
      </aside>
    </div>
  </section>

  <section class="section decoders-section" id="decoders" aria-labelledby="decoders-title">
    <div class="container">
      <div class="qec-section-head">
        <div><span class="eyebrow section-kicker">02 / The models</span><h2 id="decoders-title">A broad range of <span class="grad-text">decoding methods.</span></h2></div>
        <p class="section-summary">The benchmark covers 11 full-decoder methods across gradient-boosted trees, neural networks, tabular foundation models, and classical baselines.</p>
      </div>
      <div class="decoder-grid">
        <article class="decoder-family"><div class="decoder-family-head"><span class="family-icon trees" aria-hidden="true">▥</span><div><h3>Gradient-boosted trees</h3><span class="family-subtitle">GBDT · 3 models</span></div></div><p>Strong, practical machine-learning methods that learn patterns from structured measurements.</p><div class="model-list" aria-label="Gradient-boosted tree models"><span class="model-chip">CatBoost</span><span class="model-chip">LightGBM</span><span class="model-chip">XGBoost</span></div></article>
        <article class="decoder-family"><div class="decoder-family-head"><span class="family-icon neural" aria-hidden="true">⌁</span><div><h3>Neural networks</h3><span class="family-subtitle">NN-based · 4 models</span></div></div><p>Models that discover complex relationships, including patterns across sequences of measurements.</p><div class="model-list" aria-label="Neural network models"><span class="model-chip">MLP</span><span class="model-chip">TabM</span><span class="model-chip">TabR</span><span class="model-chip">LSTM</span></div></article>
        <article class="decoder-family"><div class="decoder-family-head"><span class="family-icon foundation" aria-hidden="true">✳</span><div><h3>Tabular foundation models</h3><span class="family-subtitle">TFM · 2 models</span></div></div><p>Modern models designed to transfer tabular-data learning strategies across problems.</p><div class="model-list" aria-label="Tabular foundation models"><span class="model-chip">TabPFNv2</span><span class="model-chip">TabICLv2</span></div></article>
        <article class="decoder-family"><div class="decoder-family-head"><span class="family-icon classical" aria-hidden="true">◇</span><div><h3>Classical baselines</h3><span class="family-subtitle">Reference methods · 2 models</span></div></div><p>Established decoding algorithms that provide an important reference point for AI approaches.</p><div class="model-list" aria-label="Classical baseline models"><span class="model-chip">MWPM</span><span class="model-chip">Chromobius</span></div></article>
      </div>
      <aside class="compatibility"><span class="compat-icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 11l10-5M7 13l10 5"/></svg></span><div><strong>Designed for different QEC codes</strong><p>Full decoders are code-agnostic: they are designed to work across QEC code families, rather than being tied to a single code type.</p></div></aside>
    </div>
  </section>

  <section class="workflows-section" id="features" aria-labelledby="features-title">
    <div class="container">
      <div class="qec-section-head"><div><span class="eyebrow section-kicker">03 / The toolkit</span><h2 id="features-title">Research tools and <span class="grad-text">model checkpoints.</span></h2></div><p class="section-summary">Beyond the decoder benchmark, the zoo includes dedicated pre-decoding methods and reusable trained model checkpoints.</p></div>
      <div class="workflow-grid">
        <article class="workflow-card"><span class="step">01 / SPEED</span><h3>Pre-decoders</h3><p>Lightweight pre-decoding techniques designed to reduce the computational work of downstream decoding tasks.</p></article>
        <article class="workflow-card"><span class="step">02 / COMPARE</span><h3>Full decoders</h3><p>Compare machine-learning and classical methods for predicting corrections from QEC measurement data.</p></article>
        <article class="workflow-card"><span class="step">03 / REUSE</span><h3>Model checkpoints</h3><p>Saved model checkpoints support model reuse and evaluation without requiring training from scratch.</p></article>
      </div>
    </div>
  </section>

  <section class="cta-section" aria-labelledby="cta-title">
    <div class="container">
      <div class="cta-band cta-qec">
        <div><span class="eyebrow">Research with us</span><h2 id="cta-title">Better decoding starts with better comparisons.</h2><p>Curious about QEC benchmarking, datasets, or collaboration? Connect with Infinidata Lab.</p></div>
        <a class="btn btn-primary" href="/contact">Get in touch <span aria-hidden="true">↗</span></a>
      </div>
      <div class="release-note" role="note"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3h8l5 5v13H3V3h5z"/><path d="M16 3v5h5M8 13h8M8 17h6"/></svg><span><strong>Code availability:</strong> The codebase will be available upon publication of the benchmark manuscript.</span></div>
    </div>
  </section>
</div>

<style>
/* QEC Model Zoo — additive styles on top of Infinidata Lab's stylesheet */
.qec-hero { position:relative; overflow:hidden; isolation:isolate; border-bottom:1px solid var(--line); padding:86px 0 82px; }
.qec-hero::before { content:""; position:absolute; z-index:-1; pointer-events:none; inset:-20% 0 auto 16%; height:680px; background:radial-gradient(ellipse at 55% 28%, color-mix(in srgb,var(--brand) 11%,transparent),transparent 68%); }
.qec-hero-grid { display:grid; grid-template-columns: minmax(0, 1fr) minmax(0, .97fr); align-items:center; gap:58px; }
.hero-eyebrow { display:inline-flex; align-items:center; gap:9px; margin-bottom:25px; color:var(--brand-2); font:600 11px/1.5 var(--font-mono); letter-spacing:.14em; text-transform:uppercase; }
.hero-eyebrow::before { content:""; width:8px; height:8px; flex:none; background:var(--brand-2); border-radius:50%; box-shadow:0 0 0 5px color-mix(in srgb,var(--brand-2) 12%,transparent); }
.qec-hero h1 { max-width:12ch; font-size:clamp(42px,5.2vw,66px); line-height:1.09; letter-spacing:-.058em; font-weight:650; }
.qec-hero .hero-lead { font-size:17px; color:var(--muted); line-height:1.78; max-width:52ch; margin:23px 0 0; }
.hero-actions { display:flex; gap:12px; align-items:center; flex-wrap:wrap; margin:31px 0 0; }
.hero-actions .btn { min-height:47px; }
.hero-stats { display:flex; align-items:center; flex-wrap:wrap; gap:0; margin-top:47px; }
.hero-stat { padding:0 27px; border-left:1px solid var(--line-2); }
.hero-stat:first-child { border-left:0; padding-left:0; }
.hero-stat strong { display:block; font:600 28px/1.1 var(--font-head); letter-spacing:-.05em; }
.hero-stat span { display:block; font-size:12.5px; color:var(--muted); margin-top:7px; }
.hero-stat .cross-code { font-size:23px; line-height:1.25; }
/* Hero diagram is intentionally a conceptual illustration, not a measured result. */
.benchmark-visual { position:relative; overflow:hidden; border-radius:25px; min-height:510px; color:#e8edff; background:radial-gradient(ellipse at 90% 2%,#283779 0%,transparent 51%),linear-gradient(160deg,#161d42 0%,#0d1534 85%); box-shadow:0 29px 78px -46px rgba(19,37,121,.7); border:1px solid rgba(163,192,255,.18); padding:26px; }
.benchmark-visual::before { content:""; position:absolute; inset:0; opacity:.26; background-image:radial-gradient(#6974b7 .8px,transparent .8px); background-size:22px 22px; mask-image:linear-gradient(110deg,transparent,#000); pointer-events:none; }
.visual-head { position:relative; z-index:1; display:flex; justify-content:space-between; align-items:center; gap:12px; color:#9ba9d6; font:500 11px/1.5 var(--font-mono); letter-spacing:.11em; text-transform:uppercase; }
.visual-head .visual-id { color:#5dc7db; }
.visual-layout { position:relative; z-index:1; margin-top:31px; display:grid; gap:13px; }
.signal-panel { border:1px solid rgba(164,189,251,.19); border-radius:16px; padding:18px 18px 14px; background:rgba(13,23,56,.79); }
.panel-label { display:flex; align-items:center; justify-content:space-between; gap:12px; color:#b5c2e8; font-size:12px; }
.panel-label span:last-child { display:inline-flex; align-items:center; gap:6px; color:#80e3df; font-size:11px; }
.panel-label span:last-child::before { content:""; width:6px; height:6px; border-radius:50%; background:#75e8d2; }
.signal-grid { display:grid; grid-template-columns:repeat(13,minmax(0,1fr)); gap:9px; justify-items:center; margin:16px 0 4px; }
.signal-dot { width:8px; height:8px; border-radius:3px; background:#334271; }
.signal-dot.active { background:#81e4e6; box-shadow:0 0 0 2px rgba(129,228,230,.12),0 0 17px rgba(129,228,230,.35); }
.signal-dot.purple { background:#a6a9ff; box-shadow:0 0 11px rgba(166,169,255,.33); }
.flow-connector { display:flex; align-items:center; justify-content:center; height:25px; color:#798dc8; }
.flow-connector svg { height:25px; }
.process-panel { display:grid; grid-template-columns: .8fr 1.2fr; gap:11px; }
.process-stage { border:1px solid rgba(164,189,251,.21); background:rgba(27,41,86,.92); padding:16px; border-radius:15px; min-width:0; }
.process-stage.secondary { background:rgba(91,91,179,.22); border-color:rgba(172,176,255,.38); }
.process-stage .stage-kicker { color:#9eafd7; font:500 10px var(--font-mono); letter-spacing:.09em; text-transform:uppercase; }
.process-stage h3 { margin:9px 0 7px; font-size:16px; font-weight:550; color:#f5f8ff; }
.process-stage p { font-size:12px; color:#aebcde; line-height:1.5; }
.output-panel { display:flex; align-items:center; gap:11px; min-height:64px; background:rgba(24,116,128,.16); border:1px solid rgba(109,227,226,.3); border-radius:14px; padding:13px 16px; }
.output-icon { display:grid; place-items:center; flex:none; width:35px; height:35px; border-radius:10px; background:rgba(95,215,215,.16); color:#9bffec; font-size:18px; }
.output-panel strong { display:block; font-size:13.5px; font-weight:600; }
.output-panel small { display:block; font-size:11px; color:#a8cbd7; margin-top:3px; }
.visual-foot { position:relative; z-index:1; margin-top:18px; color:#8596c7; font:400 10px/1.5 var(--font-mono); text-align:center; }
/* Section system */
.section-kicker { display:block; margin-bottom:12px; }
.qec-section-head { display:flex; align-items:end; justify-content:space-between; flex-wrap:wrap; gap:24px; margin-bottom:30px; }
.qec-section-head h2 { max-width:19ch; font-size:clamp(30px,3.6vw,44px); letter-spacing:-.04em; }
.qec-section-head .section-summary { max-width:53ch; color:var(--muted); font-size:15.5px; line-height:1.75; }
.intro-section { padding-top:88px; padding-bottom:86px; }
.intro-layout { display:grid; grid-template-columns:.84fr 1.16fr; align-items:start; gap:70px; }
.intro-section h2 { font-size:clamp(30px,3.6vw,43px); max-width:15ch; letter-spacing:-.045em; }
.intro-section .intro-text { margin-top:18px; font-size:17px; color:var(--muted); line-height:1.8; max-width:47ch; }
.intro-stack { display:grid; gap:13px; }
.intro-item { display:flex; align-items:start; gap:18px; padding:20px 24px; border:1px solid var(--line); background:var(--surface); border-radius:17px; }
.intro-number { color:var(--brand-2); font:600 13px var(--font-mono); padding-top:3px; }
.intro-item h3 { font-size:18px; margin-bottom:5px; }
.intro-item p { color:var(--muted); font-size:14px; line-height:1.65; }
.datasets-section { padding-top:85px; background:var(--bg-2); border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
.filter-row { display:flex; flex-wrap:wrap; align-items:center; gap:8px; margin:0 0 26px; }
.filter-btn { appearance:none; border:1px solid var(--line-2); background:var(--surface); color:var(--muted); border-radius:999px; padding:8px 15px; font:500 13px var(--font-body); cursor:pointer; transition:background .15s,color .15s,border-color .15s; }
.filter-btn:hover { background:var(--surface-2); color:var(--ink); }
.filter-btn[aria-pressed="true"] { color:light-dark(#f7f7ff,#080b1a); border-color:var(--brand); background:var(--brand); }
.dataset-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:16px; }
.dataset-card { display:flex; flex-direction:column; min-width:0; padding:23px; background:var(--surface); border:1px solid var(--line); border-radius:18px; transition:border-color .18s,transform .18s,box-shadow .18s; }
.dataset-card:hover { transform:translateY(-3px); border-color:var(--line-2); box-shadow:var(--shadow); }
.dataset-card[hidden] { display:none; }
.dataset-card-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:19px; }
.dataset-symbol { width:42px; height:42px; display:grid; place-items:center; font-size:25px; border-radius:12px; border:1px solid transparent; line-height:1; }
.dataset-symbol.surface { color:#6969e8; background:color-mix(in srgb,var(--brand) 13%,transparent); border-color:color-mix(in srgb,var(--brand) 16%,transparent); }
.dataset-symbol.color { color:var(--brand-2); background:color-mix(in srgb,var(--brand-2) 13%,transparent); }
.dataset-symbol.repetition { color:var(--gold); background:color-mix(in srgb,var(--gold) 12%,transparent); }
.dataset-symbol.other { color:var(--violet); background:color-mix(in srgb,var(--violet) 11%,transparent); }
.distance-badge { display:inline-flex; justify-content:center; align-items:center; color:var(--muted); background:var(--surface-2); border:1px solid var(--line); border-radius:999px; padding:4px 11px; font:500 11px/1.6 var(--font-mono); }
.dataset-card h3 { font-size:21px; margin-bottom:5px; letter-spacing:-.025em; }
.dataset-kind { color:var(--brand-2); font:500 11px var(--font-mono); margin-bottom:15px; }
.dataset-card p { color:var(--muted); font-size:13.5px; line-height:1.65; flex:1; min-height:64px; }
.dataset-meta { display:flex; align-items:center; justify-content:space-between; gap:10px; margin-top:20px; padding-top:15px; border-top:1px solid var(--line); font-size:11.5px; color:var(--faint); }
.dataset-footnote { color:var(--muted); font-size:12.5px; line-height:1.7; margin-top:22px; }
.sim-note { margin-top:33px; display:grid; grid-template-columns:auto 1fr; align-items:start; gap:19px; padding:24px 27px; border:1px solid var(--line-2); border-radius:18px; background:linear-gradient(120deg,color-mix(in srgb,var(--brand) 7%,var(--surface)),color-mix(in srgb,var(--brand-2) 5%,var(--surface))); }
.sim-icon { display:grid; place-items:center; flex:none; width:42px; height:42px; border-radius:13px; background:color-mix(in srgb,var(--brand) 13%,transparent); color:var(--brand); }
.sim-note h3 { font-size:18px; margin-bottom:7px; }
.sim-note p { font-size:14px; color:var(--muted); line-height:1.7; max-width:86ch; }
.decoders-section { padding-top:96px; padding-bottom:93px; }
.decoder-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:19px; }
.decoder-family { border:1px solid var(--line); border-radius:20px; background:var(--surface); padding:27px 28px 25px; display:flex; flex-direction:column; }
.decoder-family-head { display:flex; align-items:center; gap:14px; margin-bottom:14px; }
.family-icon { display:grid; place-items:center; flex:none; width:44px; height:44px; border-radius:13px; font-size:20px; font-weight:600; }
.family-icon.trees { color:var(--brand); background:color-mix(in srgb,var(--brand) 12%,transparent); }
.family-icon.neural { color:var(--brand-2); background:color-mix(in srgb,var(--brand-2) 13%,transparent); }
.family-icon.foundation { color:var(--violet); background:color-mix(in srgb,var(--violet) 12%,transparent); }
.family-icon.classical { color:var(--gold); background:color-mix(in srgb,var(--gold) 12%,transparent); }
.decoder-family h3 { font-size:21px; }
.family-subtitle { display:block; color:var(--faint); font-size:12px; margin-top:3px; }
.decoder-family > p { color:var(--muted); font-size:14px; line-height:1.7; margin:0 0 24px; flex:1; }
.model-list { display:flex; flex-wrap:wrap; gap:8px; }
.model-chip { display:inline-flex; border:1px solid var(--line-2); background:var(--surface-2); padding:8px 12px; border-radius:9px; color:var(--ink); font:500 12px/1.4 var(--font-mono); }
.compatibility { display:flex; gap:17px; align-items:center; margin-top:24px; padding:20px 24px; border-radius:16px; background:color-mix(in srgb,var(--brand-2) 8%,var(--surface)); border:1px solid color-mix(in srgb,var(--brand-2) 18%,var(--line)); }
.compatibility .compat-icon { flex:none; display:grid; place-items:center; width:37px; height:37px; border-radius:50%; color:var(--brand-2); background:color-mix(in srgb,var(--brand-2) 13%,transparent); }
.compatibility strong { font-size:14px; }
.compatibility p { font-size:13.5px; line-height:1.6; color:var(--muted); margin-top:4px; }
.workflows-section { background:var(--bg-2); border-top:1px solid var(--line); border-bottom:1px solid var(--line); padding:86px 0; }
.workflow-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:15px; }
.workflow-card { position:relative; overflow:hidden; background:var(--surface); border:1px solid var(--line); border-radius:18px; padding:27px 24px 26px; }
.workflow-card .step { display:block; font:600 12px var(--font-mono); color:var(--brand-2); margin-bottom:27px; }
.workflow-card h3 { font-size:20px; margin-bottom:11px; }
.workflow-card p { font-size:14px; color:var(--muted); line-height:1.7; }
.workflow-card::after { content:""; display:block; position:absolute; top:29px; right:26px; width:40px; height:1px; background:var(--line-2); }
.cta-section { padding:86px 0 15px; }
.cta-qec { display:grid; grid-template-columns:1fr auto; align-items:center; gap:28px; padding:48px 53px; }
.cta-qec h2 { max-width:21ch; }
.cta-qec p { margin-bottom:0; }
.cta-qec .btn { flex:none; justify-self:end; }
.release-note { display:flex; align-items:center; gap:13px; margin-top:22px; padding:17px 22px; border-radius:14px; border:1px solid var(--line); background:var(--surface); color:var(--muted); font-size:13.5px; line-height:1.65; }
.release-note strong { color:var(--ink); font-weight:600; }
.release-note svg { flex:none; color:var(--brand-2); }
/* Automatic and manually selected dark themes remain supported via the shared CSS. */
@media (max-width:1050px) { .qec-hero-grid { gap:34px; } .qec-hero h1 { font-size:clamp(38px,5vw,56px); } .benchmark-visual { padding:21px; min-height:480px; } .signal-grid { gap:6px; } }
@media (max-width:850px) { .qec-hero { padding:65px 0 70px; } .qec-hero-grid { grid-template-columns:1fr; gap:42px; } .qec-hero h1 { max-width:15ch; } .benchmark-visual { max-width:610px; width:100%; min-height:initial; } .intro-layout { grid-template-columns:1fr; gap:30px; } .intro-section h2 { max-width:25ch; } .dataset-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } .cta-qec { grid-template-columns:1fr; padding:39px; } .cta-qec .btn { justify-self:start; } }
@media (max-width:620px) { .qec-hero { padding:52px 0 56px; } .qec-hero h1 { font-size:clamp(38px,10vw,50px); } .hero-lead { font-size:16px !important; } .hero-stats { gap:15px 0; margin-top:32px; } .hero-stat { padding:0 16px; } .hero-stat strong { font-size:23px; } .hero-stat .cross-code { font-size:17px; } .hero-stat span { font-size:11px; } .benchmark-visual { border-radius:19px; padding:18px; } .visual-layout { margin-top:21px; } .signal-grid { gap:5px; } .signal-dot { width:6px; height:6px; } .process-panel { grid-template-columns:1fr 1fr; } .process-stage { padding:12px; } .process-stage h3 { font-size:14px; } .process-stage p { font-size:11px; } .qec-section-head h2 { font-size:31px; } .intro-section,.datasets-section,.decoders-section { padding-top:65px; padding-bottom:64px; } .dataset-grid,.decoder-grid,.workflow-grid { grid-template-columns:1fr; } .dataset-card p { min-height:0; } .workflow-card { padding:24px; } .workflows-section { padding:64px 0; } .sim-note { padding:21px; } .cta-section { padding:65px 0 10px; } .cta-qec { padding:32px 25px; } }
@media (prefers-reduced-motion:reduce) { :global(html) { scroll-behavior:auto; } *,*::before,*::after { transition-duration:.01ms !important; animation-duration:.01ms !important; } }


/* Independent code, distance, and hardware platform filters */
.dataset-filters { display:grid; gap:17px; padding:19px 21px 17px; margin:0 0 14px; border-radius:19px; border:1px solid var(--line); background:var(--surface); }
.filter-group { display:grid; grid-template-columns:126px minmax(0,1fr); align-items:start; gap:13px; }
.filter-heading { font:600 11px/1.5 var(--font-mono); letter-spacing:.025em; color:var(--faint); padding:9px 0; }
.dataset-filters .filter-row { margin:0; }
.filter-summary { display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap; margin:0 0 22px; }
.filter-status-text { color:var(--muted); font-size:13px; }
.filter-reset { appearance:none; background:none; border:0; color:var(--brand-2); cursor:pointer; font:600 12px var(--font-body); padding:4px 0; text-decoration:underline; text-underline-offset:3px; }
.filter-reset:hover { color:var(--brand); }
.dataset-empty { background:var(--surface); color:var(--muted); border:1px dashed var(--line-2); border-radius:16px; padding:29px; text-align:center; margin-bottom:20px; }
.dataset-empty[hidden] { display:none; }
.dataset-meta { flex-wrap:wrap; }
.platform-chip { font:500 10px/1.5 var(--font-mono); color:var(--brand-2); border-radius:999px; border:1px solid color-mix(in srgb,var(--brand-2) 21%,var(--line)); background:color-mix(in srgb,var(--brand-2) 7%,var(--surface)); padding:3px 8px; white-space:nowrap; }
@media(max-width:620px) { .dataset-filters { padding:17px 15px; } .filter-group { grid-template-columns:1fr; gap:4px; } .filter-heading { padding:0; } .dataset-filters .filter-row { gap:7px; } .filter-btn { font-size:12px; padding:7px 12px; } }
.publication-status { margin-top:18px; color:var(--muted); font-size:14px; }

</style>
