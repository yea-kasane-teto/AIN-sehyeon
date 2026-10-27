const app = document.querySelector('#app');
const requestedModule = new URLSearchParams(window.location.search).get('module') || 'base';
const moduleRegistry = window.AINModuleRegistry || {};
const definition = moduleRegistry[requestedModule];

if (requestedModule === 'ml' || requestedModule === 'machine-learning') {
  window.location.replace('https://yea-kasane-teto.github.io/AIN-sanghyo/?module=ml');
} else if (!definition) {
  document.title = '학습 영역을 찾을 수 없어요 | AIN';
  app.innerHTML = `
    <main class="not-found">
      <span class="eyebrow">AIN LEARNING AREA</span>
      <h1>요청한 학습 영역을 찾을 수 없어요.</h1>
      <p>주소의 module 값을 확인해 주세요.</p>
      <a class="button button-primary" href="./?module=base">AI 기초로 이동</a>
    </main>`;
} else {
  const learningModule = definition.load();
  if (!learningModule) {
    document.title = '학습 화면을 불러오지 못했어요 | AIN';
    app.innerHTML = `
      <main class="not-found">
        <span class="eyebrow">AIN LEARNING AREA</span>
        <h1>학습 화면을 불러오지 못했어요.</h1>
        <p>index.html과 src 폴더가 같은 AIN_sehyeon 폴더 안에 있는지 확인해 주세요.</p>
        <a class="button button-primary" href="./?module=base">다시 열기</a>
      </main>`;
  } else {
    document.title = `${learningModule.title} | AIN`;
    learningModule.render(app);
  }
}
