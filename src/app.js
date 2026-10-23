import { moduleRegistry } from './modules/registry.js';

const app = document.querySelector('#app');
const requestedModule = new URLSearchParams(window.location.search).get('module') || 'base';
const definition = moduleRegistry[requestedModule];

if (!definition) {
  document.title = '학습 영역을 찾을 수 없어요 | AIN';
  app.innerHTML = `
    <main class="not-found">
      <span class="eyebrow">AIN LEARNING AREA</span>
      <h1>요청한 학습 영역을 찾을 수 없어요.</h1>
      <p>주소의 module 값을 확인해 주세요.</p>
      <a class="button button-primary" href="./?module=base">AI 기초로 이동</a>
    </main>`;
} else {
  const learningModule = await definition.load();
  document.title = `${learningModule.title} | AIN`;
  learningModule.render(app);
}
