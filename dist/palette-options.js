'use strict';

// Comparison-only tokens. These do not change the main portfolio or persist a choice.
const palettes = {
  sunlight: {
    name:'Sunlight & Raspberry',paper:'#fffefa',ink:'#413322',accent:'#a52d58',darkAccent:'#ef9bbb',quiet:'#fde68a',
    copy:'White first, a trace of sunshine, and a raspberry highlight. Warm without a yellow canvas.',
    light:'White canvas, pale yellow details, raspberry emphasis.',dark:'Warm charcoal, quiet gold details, soft raspberry emphasis.',
    swatches:[['Sunshine','#eab308'],['Yellow','#facc15'],['Pale yellow','#fde68a'],['Cream','#fffbeb'],['Brown','#713f12'],['Hero','#a52d58']]
  },
  navy: {
    name:'Navy & Persimmon',paper:'#fcfdff',ink:'#2f4156',accent:'#b9472e',darkAccent:'#efa38e',quiet:'#c8d9e6',
    copy:'My recommendation for the calmer direction: white space, navy structure, and a restrained persimmon highlight.',
    light:'White surfaces, navy text, persimmon project highlights.',dark:'Deep navy surfaces with soft persimmon emphasis.',
    swatches:[['Navy','#2f4156'],['Teal','#567c8d'],['Sky','#c8d9e6'],['Beige','#f5efeb'],['White','#fcfdff'],['Hero','#b9472e']]
  },
  beach: {
    name:'Sunny Beach Day',paper:'#fffdf9',ink:'#264653',accent:'#1769aa',darkAccent:'#8fc6ef',quiet:'#e9c46a',
    copy:'Beach colors used as quiet supporting tones. A Pacific-blue highlight keeps the engineering story focused.',
    light:'White-ish canvas, sand details, Pacific-blue highlights.',dark:'Deep ocean surfaces with a lighter blue highlight.',
    swatches:[['Ocean','#264653'],['Teal','#2a9d8f'],['Sand','#e9c46a'],['Peach','#f4a261'],['Coral','#e76f51'],['Hero','#1769aa']]
  },
  cobalt: {
    name: 'Paper & Cobalt', paper: '#f8fafc', ink: '#182332', accent: '#365fd1',
    darkAccent: 'color-mix(in srgb,#365fd1 70%,#f8fafc)',
    copy: 'Crisp, precise, and easy to scan. My strongest fit for a technical lead portfolio.',
    light: 'A clear canvas with focused blue emphasis.', dark: 'Ink-blue surfaces with a softer cobalt accent.',
    swatches: [['Paper','#f8fafc'],['Ink','#182332'],['Cobalt','#365fd1']]
  },
  coral: {
    name: 'Sand & Coral', paper: '#f3ecdf', ink: '#173b3c', accent: '#d26356',
    darkAccent: 'color-mix(in srgb,#d26356 85%,#f3ecdf)',
    copy: 'Warmer and more expressive. Deep teal brings structure; coral adds a human touch.',
    light: 'Sand surfaces, deep teal text, coral emphasis.', dark: 'Deep teal surfaces with warm sand text.',
    swatches: [['Sand','#f3ecdf'],['Deep teal','#173b3c'],['Coral','#d26356']]
  },
  jade: {
    name: 'Graphite & Jade', paper: '#f3f7f5', ink: '#202c29', accent: '#1c8267',
    darkAccent: 'color-mix(in srgb,#1c8267 70%,#f3f7f5)',
    copy: 'Composed, independent, and understated. A quieter alternative to the usual blue tech portfolio.',
    light: 'Cool paper and graphite with a jade accent.', dark: 'Graphite surfaces with clear green wayfinding.',
    swatches: [['Paper','#f3f7f5'],['Graphite','#202c29'],['Jade','#1c8267']]
  },
  aqua: {
    name: 'Orange & Aqua', paper: '#ffffff', ink: '#163a3b', accent: '#2ec4b6',
    darkAccent: '#2ec4b6', orange: '#ff9f1c', peach: '#ffbf69', pale: '#cbf3f0',
    copy: 'Your Coolors palette: brighter, friendlier, and the most expressive option. Deep teal keeps the reading experience grounded.',
    light: 'White and pale aqua surfaces, warm orange actions.', dark: 'Deep teal surfaces, aqua details, warm orange actions.',
    swatches: [['Orange','#ff9f1c'],['Peach','#ffbf69'],['White','#ffffff'],['Pale aqua','#cbf3f0'],['Aqua','#2ec4b6']]
  }
};
const params = new URLSearchParams(location.search);
let selected = Object.hasOwn(palettes, params.get('palette')) ? params.get('palette') : 'navy';
let view = ['full','case-study'].includes(params.get('view')) ? params.get('view') : 'portfolio';
let treatment = ['flat','soft'].includes(params.get('treatment')) ? params.get('treatment') : 'selective';
let sourceHtml;
let renderId = 0;
const frames = [document.getElementById('light-preview'),document.getElementById('dark-preview')];
const status = document.getElementById('preview-status');
const tabs = [...document.querySelectorAll('[data-palette]')];

function previewDocument(palette, theme) {
  const doc = new DOMParser().parseFromString(sourceHtml, 'text/html');
  const base = doc.createElement('base');
  base.href = new URL('./', location.href).href;
  doc.head.prepend(base);
  doc.querySelectorAll('script:not([src])').forEach(script => script.remove());
  doc.documentElement.dataset.theme = theme;
  doc.documentElement.dataset.treatment = treatment;
  const compactCss = view === 'portfolio' ? `
    .shell{display:block;max-width:900px;padding:24px 24px 0}
    .sidebar{position:static;height:auto;display:block;margin-bottom:24px;padding:0;border:0;background:transparent}
    .sidebar nav,.side-foot{display:none!important}
    .identity-heading{margin:0;display:flex;align-items:baseline;gap:16px;flex-wrap:wrap}
    .identity-heading .wordmark{padding:0;max-width:none;font-size:var(--text-title);letter-spacing:-.6px;line-height:1.3}
    .wordmark>span{display:inline}.role-line{padding:0;max-width:none;font-size:var(--text-meta)}
    .home-section{padding:0}.home-section .intro h1{font-size:var(--text-hero);margin:0 0 12px}
    .home-section .intro p{font-size:var(--text-body);line-height:1.6}
    .accent-heading{color:var(--accent)}
    .career-section{margin-top:28px;padding-top:0}.journey-heading{margin-bottom:20px}
    .career-project-timeline{padding-left:16px;margin-left:0}
    .career-project-timeline>.company-group{grid-template-columns:minmax(0,1fr);gap:12px;padding-top:20px}
    .career-project-timeline>.company-group:first-child{padding-top:0}
    .career-project-timeline>.company-group::before{left:-21px;top:27px}
    .career-project-timeline>.company-group:first-child::before{top:7px}
    .career-project-timeline .company-heading h3{font-size:var(--text-title)}
    .career-project-timeline .company-roles{padding-left:14px}
    .career-project-timeline .role-step::before{left:-14px}
    .career-project-timeline .role-step:first-child::before{left:-15px}
    .career-project-timeline .role-projects{grid-template-columns:minmax(0,1fr);gap:18px}
  ` : '';
  const style = doc.createElement('style');
  style.textContent = `
    :root{--color-gunmetal:${palette.ink};--color-fog:${palette.paper};--color-orange:${palette.accent};
      --bg:${treatment === 'soft' ? `color-mix(in srgb,${palette.paper} 96%,${palette.ink})` : palette.paper};--card:var(--bg);--ink:${palette.ink};--accent:${palette.accent};--focus:var(--ink);--accent-text:var(--ink);
      --line:color-mix(in srgb,var(--ink) 19%,var(--bg));--wash:color-mix(in srgb,var(--ink) 4%,var(--bg));
      --muted:color-mix(in srgb,var(--ink) 76%,var(--bg));--shadow:none}
    :root[data-theme=dark]{--bg:${palette.ink};--ink:${palette.paper};
      --card:color-mix(in srgb,${palette.paper} 5%,${palette.ink});--accent:${palette.darkAccent};
      --wash:color-mix(in srgb,${palette.paper} 8%,${palette.ink});--line:color-mix(in srgb,${palette.paper} 23%,${palette.ink});
      --muted:color-mix(in srgb,${palette.paper} 77%,${palette.ink})}
    ${palette.quiet ? `:root{--wash:color-mix(in srgb,${palette.quiet} 12%,var(--bg))}` : ''}
    .project-wordmark,.project-highlights strong,.dialog-live-link{color:var(--accent-text)}
    :root{--accent-text:color-mix(in srgb,var(--accent) 85%,var(--ink));--focus:var(--ink)}
    :root[data-theme=dark]{--accent-text:var(--accent)}
    .resume-link:hover{color:var(--ink);text-decoration-color:var(--accent)}
    .dialog-live-link{color:var(--ink);text-decoration:underline;text-decoration-color:var(--accent)}
    @media(max-width:760px){.career-project-timeline .role-projects{grid-template-columns:minmax(0,1fr)}}
    ::selection{background:var(--accent-wash);color:var(--ink)}
    html{scroll-behavior:auto}
    html{scroll-padding-top:24px;scrollbar-color:var(--muted) var(--bg)}
    ${compactCss}
    .project-stack .project{background:var(--card)!important;box-shadow:${treatment === 'soft' ? 'var(--raised)' : 'none'}!important;border:${treatment === 'soft' ? '0' : '1px solid var(--line)'};border-radius:14px}
    .project-stack .project:is(:hover,:focus-visible){border-color:var(--accent)}
    .role-summary{max-width:68ch}.career-project-timeline .role-heading{align-items:baseline}
    .project-story .project-bullets li{font-size:var(--text-body);line-height:1.75}
    #project-dialog{width:calc(100% - 28px);max-height:calc(100dvh - 28px);border-radius:12px;box-shadow:none}
    #project-dialog::backdrop{background:var(--bg);backdrop-filter:none}
    .project-dialog-header,.project-story,.dialog-stack{padding-left:24px;padding-right:24px}
    .project-highlights{grid-template-columns:1fr;gap:20px}
    .project-dialog-header .dialog-summary,.project-dialog-header .company{font-size:var(--text-body)}

    @media(max-width:480px){.shell{padding-inline:18px}.career-project-timeline .role-projects{grid-template-columns:1fr}.project-highlights{grid-template-columns:1fr}}
    ${palette.orange ? `
      ${treatment === 'soft' ? `:root:not([data-theme=dark]){--bg:color-mix(in srgb,${palette.pale} 20%,${palette.paper});--card:var(--bg)}` : ''}
      .project-stack .project{background:${treatment === 'soft' ? 'var(--card)' : `color-mix(in srgb,${palette.pale} 36%,var(--card))`}!important}
      :root[data-theme=dark] .project-stack .project{background:var(--card)!important}
      .project-cta{background:${palette.orange}!important;border-color:${palette.ink}!important;color:${palette.ink}!important}
      .career-project-timeline .role-projects .project .project-cta{color:${palette.ink}!important}
      .project:is(:hover,:focus-visible) .project-cta{background:${palette.peach}!important;color:${palette.ink}!important}
      :root:not([data-theme=dark]){--accent-text:var(--ink)}
      .ai-search-label{background:${palette.orange};color:${palette.ink};border-color:${palette.ink}}
      .ai-search-label svg{color:${palette.ink}}
      .career-project-timeline .company-group::before,.career-project-timeline .role-step:first-child::before{background:${palette.orange};border-color:var(--ink)}
      .accent-heading{color:var(--ink);text-decoration:underline;text-decoration-color:${palette.orange};text-decoration-thickness:3px;text-underline-offset:6px}
      :root:not([data-theme=dark]) a:focus-visible,:root:not([data-theme=dark]) button:focus-visible{outline-color:${palette.ink}!important}
      .chart-income,.prediction-growth{stroke:var(--ink)!important}
    ` : ''}
  `;
  doc.head.append(style);
  const heading = doc.querySelector('.intro h1');
  const phrase = [...heading.childNodes].find(node => node.nodeType === Node.TEXT_NODE && node.textContent.includes('Agentic Engineering.'));
  if (phrase) {
    const span = doc.createElement('span');span.className='accent-heading';span.textContent=phrase.textContent;phrase.replaceWith(span);
  }
  const init = doc.createElement('script');
  init.textContent = `
    setTheme(${JSON.stringify(theme)});
    document.getElementById('theme').disabled=true;
    document.addEventListener('click',event=>{const a=event.target.closest('a[href^="#"]');if(a&&!a.hasAttribute('data-project')){const el=document.getElementById(a.hash.slice(1));if(el){event.preventDefault();el.scrollIntoView();}}});
    ${view === 'case-study' ? "openProject('trusearch');" : ''}
    parent.postMessage({source:'portfolio-palette-preview',revision:${renderId},theme:${JSON.stringify(theme)}},${JSON.stringify(location.origin)});
  `;
  doc.body.append(init);
  return '<!doctype html>\n'+doc.documentElement.outerHTML;
}

function render() {
  const p = palettes[selected];
  document.getElementById('direction-title').textContent=p.name;
  document.getElementById('direction-copy').textContent=p.copy;
  document.getElementById('light-note').textContent=p.light;
  document.getElementById('dark-note').textContent=p.dark;
  document.getElementById('comparison').setAttribute('aria-labelledby','tab-'+selected);
  tabs.forEach(tab=>{const active=tab.dataset.palette===selected;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;});
  const swatches=document.getElementById('swatches');swatches.replaceChildren();
  p.swatches.forEach(([name,color])=>{
    const li=document.createElement('li'),swatch=document.createElement('span'),label=document.createElement('strong'),value=document.createElement('code');
    swatch.className='swatch';swatch.style.background=color;swatch.setAttribute('aria-hidden','true');label.textContent=name;value.textContent=color;
    li.append(swatch,label,value);swatches.append(li);
  });
  document.getElementById('palette-source').hidden=selected!=='aqua';
  document.querySelectorAll('input[name=view]').forEach(input=>input.checked=input.value===view);
  document.querySelectorAll('input[name=treatment]').forEach(input=>input.checked=input.value===treatment);
  const url=new URL(location.href);url.searchParams.set('palette',selected);url.searchParams.set('view',view);url.searchParams.set('treatment',treatment);history.replaceState(null,'',url);
  if (!sourceHtml) return;
  renderId++;status.textContent='Loading both previews…';
  frames.forEach((frame,index)=>{const theme=index?'dark':'light';frame.title=p.name+' '+theme+' '+(view==='case-study'?'case study':'portfolio')+' preview';frame.srcdoc=previewDocument(p,theme);});
}

tabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>{selected=tab.dataset.palette;render();});
  tab.addEventListener('keydown',event=>{
    let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;else if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;else return;
    event.preventDefault();tabs[next].focus();selected=tabs[next].dataset.palette;render();
  });
});
document.querySelectorAll('input[name=view]').forEach(input=>input.addEventListener('change',()=>{view=input.value;render();}));
document.querySelectorAll('input[name=treatment]').forEach(input=>input.addEventListener('change',()=>{treatment=input.value;render();}));
const ready=new Set();
window.addEventListener('message',event=>{
  if(!frames.some(frame=>frame.contentWindow===event.source)||event.origin!==location.origin||event.data?.source!=='portfolio-palette-preview'||event.data.revision!==renderId)return;
  ready.add(renderId+':'+event.data.theme);
  if(ready.has(renderId+':light')&&ready.has(renderId+':dark'))status.textContent='';
});
render();
fetch('index.html',{cache:'no-store'}).then(response=>{if(!response.ok)throw new Error('Portfolio could not be loaded.');return response.text();}).then(html=>{sourceHtml=html;render();}).catch(()=>{status.textContent='Could not load the portfolio previews. Refresh this page to try again.';});
