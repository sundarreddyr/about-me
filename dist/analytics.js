(() => {
  'use strict';
  const id = window.portfolioAnalyticsConfig?.measurementId;
  const isMainPagesSite = location.hostname === 'sundarreddyr.github.io' &&
    ['/about-me/', '/about-me/index.html'].includes(location.pathname);
  if (!isMainPagesSite || !/^G-[A-Z0-9]{6,20}$/.test(id || '') ||
      navigator.doNotTrack === '1' || navigator.globalPrivacyControl === true) return;

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', id, {allow_google_signals:false, allow_ad_personalization_signals:false});
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
  document.head.append(script);

  const sections = new Set(['home', 'career', 'skills', 'contact']);
  const projects = new Set(['agentic', 'trusearch', 'grower', 'finance', 'analytics']);
  const viewed = new Set();
  const engagement = new Map();
  let section = 'home';
  let project = null;
  let lastTick = performance.now();
  let lastActivity = lastTick;
  let focused = document.hasFocus();
  const send = (name, data = {}) => gtag('event', name, data);

  function tick() {
    const now = performance.now();
    const elapsed = Math.min(Math.max(now-lastTick, 0), 5000);
    if (!document.hidden && focused && now-lastActivity < 60000) {
      const key = project ? 'project:' + project : 'section:' + section;
      engagement.set(key, (engagement.get(key) || 0) + elapsed);
    }
    lastTick = now;
  }
  function flush() {
    tick();
    for (const [key, milliseconds] of engagement) {
      const seconds = Math.floor(milliseconds/1000);
      if (!seconds) continue;
      const [kind, name] = key.split(':');
      send(kind + '_engagement', {[kind === 'project' ? 'project_id' : 'section_name']:name, active_seconds:seconds});
      engagement.set(key, milliseconds-seconds*1000);
    }
  }
  function enterSection(name) {
    if (!sections.has(name)) return;
    tick();section = name;
    if (!viewed.has(name)) {viewed.add(name);send('section_view', {section_name:name});}
  }
  function init() {
    const initialSection = location.hash.slice(1);
    enterSection(sections.has(initialSection) ? initialSection : projects.has(initialSection) ? 'career' : 'home');
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
      entries.filter(entry => entry.isIntersecting).forEach(entry => enterSection(entry.target.dataset.analyticsSection));
    }, {rootMargin:'-10% 0px -55% 0px',threshold:0}) : null;
    sections.forEach(name => {
      const el = document.getElementById(name);
      const heading = el?.querySelector('h1,h2') || el;
      if (heading) {heading.dataset.analyticsSection = name;observer?.observe(heading);}
    });
    document.addEventListener('click', event => {
      const link = event.target.closest('a');
      if (!link) return;
      const name = link.hash.slice(1);
      if (sections.has(name) && link.origin === location.origin) {
        send('navigation_click', {section_name:name});
      }
      if (link.classList.contains('resume-download')) send('resume_download');
      const contact = link.closest('.contact-links');
      if (contact) {
        const type = link.protocol === 'mailto:' ? 'email' : link.hostname === 'x.com' ? 'x' : link.hostname.endsWith('linkedin.com') ? 'linkedin' : null;
        if (type) send('contact_click', {link_type:type});
      }
    });
    document.addEventListener('portfolio:project-open', event => {
      const name = event.detail?.project_id;
      if (!projects.has(name)) return;
      flush();project = name;lastActivity = performance.now();send('project_open', {project_id:name});
    });
    document.addEventListener('portfolio:project-close', () => {flush();project = null;});
    document.getElementById('full-stack')?.addEventListener('click', () => send('stack_open'));
    const initialProject = location.hash.slice(1);
    if (projects.has(initialProject) && document.getElementById('project-dialog')?.open) {
      project = initialProject;send('project_open', {project_id:initialProject});
    }
    const activity = () => {lastActivity = performance.now();};
    ['pointerdown','keydown','scroll','touchstart'].forEach(name => document.addEventListener(name, activity, {passive:true,capture:true}));
    window.addEventListener('blur', () => {flush();focused = false;});
    window.addEventListener('focus', () => {lastTick = performance.now();lastActivity = lastTick;focused = true;});
    document.addEventListener('visibilitychange', () => {flush();lastTick = performance.now();});
    const ticker = setInterval(tick,1000);
    const timer = setInterval(flush,15000);
    window.addEventListener('pagehide', () => {flush();clearInterval(timer);clearInterval(ticker);observer?.disconnect();}, {once:true});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
