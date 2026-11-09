const projects = window.portfolioProjects;
const dialog = document.getElementById('project-dialog');
const dialogContent = document.getElementById('dialog-content');
let projectTrigger;
function closeDetails() {
  if (dialog.open) dialog.close();
}

function resumeLink(text, url) {
  return url ? `<a class="resume-link" href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>` : text;
}
function linkedProjectText(text, links = []) {
  return links.reduce((result, link) => result.replace(link.text, resumeLink(link.text, link.url)), text);
}
function openProject(id, trigger) {
  const p = projects.find(project => project.id === id);
  if (!p) return;
  dialog.classList.remove('stack-dialog');
  document.getElementById('dialog-category').textContent = 'Project details';
  projectTrigger = trigger || document.querySelector(`[data-project="${id}"]`);
  const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12"/></svg>';
  dialogContent.innerHTML = `
    <header class="project-dialog-header">
      <div class="detail-head"><div>
        <h2 id="project-dialog-title">${resumeLink(p.name, p.projectUrl)}</h2>
        <p class="company">${resumeLink(p.company, p.companyUrl)}</p>
      </div></div>
      <p class="dialog-summary">${p.summary}</p>
      ${p.liveUrl ? `<a class="dialog-live-link" href="${p.liveUrl}" target="_blank" rel="noopener noreferrer">${p.liveLabel} ${arrow}</a>` : ''}
      ${p.videoUrl ? `<a class="dialog-live-link secondary-live-link" href="${p.videoUrl}" target="_blank" rel="noopener noreferrer">${p.videoLabel} ${arrow}</a>` : ''}
    </header>
    <article class="project-story" aria-label="${p.name} story">
      <div class="project-highlights" aria-label="Project highlights">
        ${p.highlights.map(([value, label]) => `<div><strong>${value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')}</strong><span>${label}</span></div>`).join('')}
      </div>
      <ul class="project-bullets">
        ${p.bullets.map(([label, text]) => `<li><strong>${label}:</strong> ${linkedProjectText(text, p.inlineLinks)}</li>`).join('')}
      </ul>
      ${p.technicalNote ? `<details class="analytics-technical"><summary>Under the hood · replication</summary><p>${p.technicalNote}</p></details>` : ''}
    </article>
    ${p.stack.length ? `<section class="dialog-stack" aria-label="Technology stack"><h3>Stack</h3><div class="tags">${p.stack.map(t => `<span>${t}</span>`).join('')}</div></section>` : ''}`;
  if (!dialog.open) dialog.showModal();
  document.body.classList.add('project-open');
  document.dispatchEvent(new CustomEvent('portfolio:project-open', {detail:{project_id:p.id}}));
  dialog.scrollTop = 0;
  document.getElementById('close-project').focus();
}
document.querySelectorAll('[data-project]').forEach(card => {
  card.addEventListener('click', event => {event.preventDefault();openProject(card.dataset.project, card);});
  card.addEventListener('keydown', event => {if(event.key === ' '){event.preventDefault();card.click();}});
});
document.getElementById('close-project').addEventListener('click', closeDetails);
dialog.addEventListener('cancel', event => { event.preventDefault(); closeDetails(); });
dialog.addEventListener('click', event => {if(event.target === dialog){const r=dialog.getBoundingClientRect();if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) closeDetails();}});
dialog.addEventListener('close', () => {document.body.classList.remove('project-open');document.dispatchEvent(new CustomEvent('portfolio:project-close'));projectTrigger?.focus({preventScroll:true});});
// Keep existing shared project anchors useful without adding bottom detail sections.
function openLinkedProject(){const id=location.hash.slice(1);if(projects.some(p=>p.id===id))openProject(id);}
window.addEventListener('hashchange',openLinkedProject);
openLinkedProject();
function updateNavigation(){let current='home';for(const id of ['career','skills','contact']){if(document.getElementById(id).getBoundingClientRect().top<=180)current=id;}if(window.scrollY>100&&window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-2)current='contact';document.querySelectorAll('.navlink').forEach(a=>{const active=a.hash==='#'+current;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}let navFrame=false;window.addEventListener('scroll',()=>{if(!navFrame){navFrame=true;requestAnimationFrame(()=>{updateNavigation();navFrame=false;});}},{passive:true});updateNavigation();
window.addEventListener('hashchange',updateNavigation);
const theme = document.getElementById('theme');
function setTheme(mode) {
  document.documentElement.dataset.theme = mode;
  theme.setAttribute('aria-checked', String(mode === 'dark'));
}
let savedTheme;
try { savedTheme = localStorage.getItem('portfolio-theme'); } catch {}
setTheme(savedTheme === 'dark' ? 'dark' : 'light');
theme.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(next);
  try { localStorage.setItem('portfolio-theme', next); } catch {}
});
document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('full-stack').addEventListener('click', event => {

  dialog.classList.add('stack-dialog');
  projectTrigger = event.currentTarget;
  document.getElementById('dialog-category').textContent = 'Skills & tools';
  dialogContent.innerHTML = `<header class="project-dialog-header"><h2 id="project-dialog-title">The full stack</h2><p class="dialog-summary">Languages, infrastructure, and engineering practices I work with.</p></header><div class="stack-dialog-body">${document.getElementById('full-stack-content').innerHTML}</div>`;
  dialog.showModal();
  document.body.classList.add('project-open');
  dialog.scrollTop = 0;
  document.getElementById('close-project').focus();
});
let previewsPaused = false;
const motionControl = document.createElement('button');
motionControl.type = 'button';motionControl.className = 'motion-control';
motionControl.textContent = 'Pause project previews';motionControl.setAttribute('aria-pressed','false');
document.querySelector('.journey-heading').append(motionControl);
motionControl.addEventListener('click', () => {previewsPaused = !previewsPaused;motionControl.setAttribute('aria-pressed',String(previewsPaused));motionControl.textContent = previewsPaused ? 'Resume project previews' : 'Pause project previews';});
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
// A visual search preview; live search remains on the linked HCG website.
const searchPreviewWord = document.getElementById('search-preview-word');
if (searchPreviewWord) {
  const searchWords = ['hospitals', 'doctors', 'cancer care'];
  let searchWordIndex = 0;
  let searchPreviewVisible = true;
  let searchWordDelay;
  const previewObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    searchPreviewVisible = entries[0].isIntersecting;
  }) : null;
  previewObserver?.observe(searchPreviewWord.closest('.search'));
  function showStaticSearchPreview() {
    if (reducedMotion.matches) searchPreviewWord.textContent = 'hospitals & doctors';
    else searchPreviewWord.textContent = searchWords[searchWordIndex];
  }
  showStaticSearchPreview();
  reducedMotion.addEventListener('change', showStaticSearchPreview);
  const searchPreviewTimer = setInterval(() => {
    if (previewsPaused || reducedMotion.matches || document.hidden || !searchPreviewVisible || dialog.open) return;
    searchPreviewWord.classList.add('word-changing');
    searchWordDelay = setTimeout(() => {
      searchWordIndex = (searchWordIndex + 1) % searchWords.length;
      searchPreviewWord.textContent = searchWords[searchWordIndex];
      searchPreviewWord.classList.remove('word-changing');
    }, 180);
  }, 3000);
  window.addEventListener('pagehide', () => {clearInterval(searchPreviewTimer);clearTimeout(searchWordDelay);previewObserver?.disconnect();}, {once:true});
}

// The phone illustration cycles through the reference's three app workflows.
const growerPhone = document.querySelector('.grower-phone');
if (growerPhone) {
  const scenes = [...growerPhone.querySelectorAll('.grower-screen')];
  const labels = [...growerPhone.querySelectorAll('.grower-screen-tabs span')];
  let sceneIndex = 0;
  let phoneVisible = false;
  let sceneTimer;
  const phoneObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    phoneVisible = entries[0].isIntersecting;
  }, {threshold:0.4}) : null;
  phoneObserver?.observe(growerPhone);
  function showGrowerScene(index) {
    sceneIndex = index;
    scenes.forEach((scene, i) => scene.classList.toggle('is-active', i === index));
    labels.forEach((label, i) => label.classList.toggle('is-active', i === index));
  }
  function startGrowerPreview() {
    clearInterval(sceneTimer);
    if (reducedMotion.matches) { showGrowerScene(0); return; }
    sceneTimer = setInterval(() => {
      if (previewsPaused || document.hidden || !phoneVisible || dialog.open) return;
      showGrowerScene((sceneIndex + 1) % scenes.length);
    }, 2800);
  }
  reducedMotion.addEventListener('change', startGrowerPreview);
  window.addEventListener('pageshow', startGrowerPreview);
  window.addEventListener('pagehide', () => clearInterval(sceneTimer));
  startGrowerPreview();
}
