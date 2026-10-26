import { renderBaseLesson } from './lessons/base-01.js';

export const title = 'AI 기초';

export function render(root) {
  root.innerHTML = `
    <div class="learning-app" id="top">
      <header class="topbar">
        <a class="brand" href="./?module=base" aria-label="AIN AI 기초 홈">
          <img class="brand-logo" src="./assets/ain-logo.png" alt="AIN 로고" />
          <span class="brand-name"><strong>AIN</strong><small>AI LEARNING AREA</small></span>
        </a>
        <label class="search-wrap" for="Search-bar">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3"/><path d="m15.4 15.4 4.2 4.2"/></svg>
          <input id="Search-bar" type="search" placeholder="AI 기초 내용 검색" autocomplete="off" />
          <kbd>Search-bar</kbd>
        </label>
        <a class="home-link" href="https://github.com/yea-kasane-teto/AIN-main">AIN 메인 <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section class="course-hero" aria-labelledby="courseTitle">
          <div class="course-hero-copy">
            <div class="hero-eyebrow"><span></span> AI LEARNING AREA · 01</div>
            <h1 id="courseTitle">AI 기초</h1>
            <p>인공지능과 머신러닝, 딥러닝은 어떻게 연결될까요?<br class="desktop-break" /> 데이터로 배우는 AI의 기본 원리를 차근차근 알아봐요.</p>
            <div class="hero-tags"><span>AI</span><span aria-hidden="true">⊃</span><span>ML</span><span aria-hidden="true">⊃</span><span>DL</span></div>
          </div>
          <div class="hero-illustration" aria-hidden="true">
            <div class="hero-orbit orbit-one"></div><div class="hero-orbit orbit-two"></div>
            <div class="concept-stack"><div class="stack-ai"><span>AI</span><div class="stack-ml"><span>ML</span><div class="stack-dl"><span>DL</span></div></div></div></div>
            <span class="hero-float float-top">AI · ML · DL</span><span class="hero-float float-bottom">데이터로 배우기</span>
            <span class="hero-sparkle sparkle-one">✳</span><span class="hero-sparkle sparkle-two">✦</span>
          </div>
        </section>

        <div class="course-overview">
          <div class="overview-title"><span class="unit-code">BASE · 01</span><span class="overview-divider"></span><span>AI의 큰 그림</span></div>
          <div class="progress-summary"><span id="progressLabel">학습 진행도</span><div class="progress-track" role="progressbar" aria-label="학습 진행도" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span id="progressFill"></span></div><strong id="progressPercent">0%</strong></div>
        </div>

        <div class="course-layout">
          <aside class="course-sidebar" aria-label="AI 기초 목차">
            <div class="sidebar-heading"><span>AI 기초 목차</span><small>BASE</small></div>
            <nav class="lesson-nav" id="lessonNavigation">
              <a href="#concepts" data-nav-section="concepts"><span class="nav-number">01</span><span>AI · ML · DL의 관계</span></a>
              <a href="#features" data-nav-section="features"><span class="nav-number">02</span><span>특징을 찾는 방법</span></a>
              <a href="#pipeline" data-nav-section="pipeline"><span class="nav-number">03</span><span>AI가 배우는 과정</span></a>
              <a href="#experiment" data-nav-section="experiment"><span class="nav-number">04</span><span>가중치 업데이트 실험</span></a>
              <a href="#quiz" data-nav-section="quiz"><span class="nav-number">05</span><span>이해 확인 퀴즈</span></a>
            </nav>
            <div class="sidebar-note"><span class="note-icon" aria-hidden="true">✳</span><p>새 단원도 <strong>base-02</strong>, <strong>base-03</strong>처럼 독립 모듈로 이어집니다.</p></div>
          </aside>

          <article class="lesson-content" id="lessonContent"></article>
        </div>
        <div class="search-empty" id="searchEmpty" hidden><strong>검색 결과가 없어요.</strong><span>다른 단어로 다시 찾아보세요.</span></div>
      </main>

      <footer class="site-footer"><a class="footer-brand" href="#top"><img src="./assets/ain-logo.png" alt="AIN 로고" /><span>AI LEARNING AREA</span></a><span>처음 배우는 AI, 원리부터 차근차근</span></footer>
    </div>`;

  const content = root.querySelector('#lessonContent');
  renderBaseLesson(content, updateProgress.bind(null, root));
  setupSearch(root);
  updateProgress(root);
}

function updateProgress(root, isComplete = null) {
  const key = 'ain-progress:base-01';
  const complete = isComplete === null ? localStorage.getItem(key) === 'done' : isComplete;
  if (isComplete !== null) localStorage.setItem(key, complete ? 'done' : '');
  const track = root.querySelector('.progress-track');
  const fill = root.querySelector('#progressFill');
  const label = root.querySelector('#progressLabel');
  const percent = root.querySelector('#progressPercent');
  if (!track || !fill || !label || !percent) return;
  const value = complete ? 100 : 0;
  track.setAttribute('aria-valuenow', String(value));
  fill.style.width = `${value}%`;
  label.textContent = complete ? '학습 완료' : '학습 진행도';
  percent.textContent = `${value}%`;
  const button = root.querySelector('#completeLesson');
  if (button) {
    button.textContent = complete ? '완료 표시 해제' : '이 차시 학습 완료';
    button.setAttribute('aria-pressed', String(complete));
  }
}

function setupSearch(root) {
  const input = root.querySelector('#Search-bar');
  const empty = root.querySelector('#searchEmpty');
  const sections = [...root.querySelectorAll('[data-searchable]')];
  const links = [...root.querySelectorAll('[data-nav-section]')];
  input.addEventListener('input', () => {
    const query = input.value.trim().toLocaleLowerCase('ko');
    let visibleCount = 0;
    sections.forEach((section) => {
      const matches = !query || section.textContent.toLocaleLowerCase('ko').includes(query);
      section.hidden = !matches;
      visibleCount += Number(matches);
    });
    links.forEach((link) => {
      const section = root.querySelector(`#${link.dataset.navSection}`);
      link.hidden = Boolean(query && section?.hidden);
    });
    empty.hidden = !query || visibleCount > 0;
  });
}
