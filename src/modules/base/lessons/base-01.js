const lessonMarkup = `
  <header class="lesson-heading">
    <span class="eyebrow">BASE-01 · 첫 번째 개념</span>
    <h2>AI 안에 머신러닝이,<br />머신러닝 안에 딥러닝이 있어요</h2>
    <p>세 단어는 서로 다른 기술을 나열한 것이 아니라, 큰 개념 안에 작은 개념이 들어가는 관계예요. 먼저 이 포함 관계를 잡아 두면 AI 학습의 지도가 한눈에 보여요.</p>
  </header>

  <section class="lesson-section" id="concepts" data-searchable aria-labelledby="conceptTitle">
    <div class="section-title-row"><span class="section-index">01</span><div><h3 id="conceptTitle">AI · ML · DL, 무엇이 다를까요?</h3><p>인공지능에서 딥러닝까지, 범위가 점점 좁아지는 계층 구조를 살펴봐요.</p></div></div>
    <div class="definition-grid">
      <article class="definition-card">
        <div class="concept-label"><strong>AI</strong><span>Artificial Intelligence · 인공지능</span></div>
        <p>인간의 지능적인 행동을 컴퓨터로 구현하는 기술을 통틀어 말해요. 규칙으로 움직이는 프로그램부터 데이터를 배우는 모델까지 폭넓게 포함해요.</p>
        <div class="example-chips"><span>알파고 같은 게임 AI</span><span>챗봇</span><span>내비게이션</span></div>
      </article>
      <article class="definition-card">
        <div class="concept-label"><strong>ML</strong><span>Machine Learning · 머신러닝</span></div>
        <p>규칙을 하나씩 직접 작성하는 대신, 데이터를 보고 컴퓨터가 패턴을 찾도록 하는 AI의 한 분야예요. 정답을 함께 주고 배우는 지도학습이 대표적이고, 정답 없이 묶음을 찾는 방법도 있어요.</p>
      </article>
      <article class="definition-card">
        <div class="concept-label"><strong>DL</strong><span>Deep Learning · 딥러닝</span></div>
        <p>머신러닝의 한 분야예요. 인공신경망(ANN)을 여러 층으로 쌓아 복잡한 패턴을 배우고, 데이터에서 유용한 특징을 찾는 과정도 함께 학습해요.</p>
      </article>
    </div>

    <div class="hierarchy-panel">
      <div>
        <div class="hierarchy-visual" role="img" aria-label="가장 바깥에 AI, 그 안에 ML, 가장 안쪽에 DL이 있는 포함 관계">
          <div class="hierarchy-ai"><strong>AI · 인공지능</strong><div class="hierarchy-ml"><strong>ML · 머신러닝</strong><div class="hierarchy-dl"><strong>DL · 딥러닝</strong><small>여러 층의 인공신경망</small></div></div></div>
        </div>
        <p class="hierarchy-caption">안쪽 개념은 바깥 개념에 포함돼요.</p>
      </div>
      <div class="hierarchy-table-wrap">
        <h4>AI의 계층 구조</h4>
        <table class="hierarchy-table">
          <thead><tr><th scope="col">개념</th><th scope="col">관계와 핵심</th><th scope="col">포함 범위</th></tr></thead>
          <tbody>
            <tr><td>AI</td><td>지능적인 행동을 구현하는 가장 넓은 분야</td><td>ML, DL 포함</td></tr>
            <tr><td>ML</td><td>데이터에서 패턴을 학습하는 AI의 분야</td><td>DL 포함</td></tr>
            <tr><td>DL</td><td>여러 층의 인공신경망을 사용하는 ML의 분야</td><td>ML에 포함</td></tr>
          </tbody>
        </table>
        <p class="table-note">따라서 DL ⊂ ML ⊂ AI이며, 세 개념은 서로 배타적인 선택지가 아니에요.</p>
      </div>
    </div>
    <div class="callout"><span aria-hidden="true">✳</span><span><strong>기억해요:</strong> 딥러닝은 머신러닝의 일부이고, 머신러닝은 인공지능을 구현하는 여러 방법 중 하나예요. 모든 AI가 머신러닝을 사용하는 것은 아니에요.</span></div>
  </section>

  <section class="lesson-section" id="features" data-searchable aria-labelledby="featuresTitle">
    <div class="section-title-row"><span class="section-index">02</span><div><h3 id="featuresTitle">특징을 찾는 방법이 달라요</h3><p>두 방식 모두 데이터를 배우지만, 특징을 준비하는 과정이 다를 수 있어요.</p></div></div>
    <div class="feature-compare">
      <article class="feature-card">
        <h4><span>ML</span> 전통적인 머신러닝의 예</h4>
        <p>사람이 문제에 도움이 될 특징을 먼저 정리해 모델에 전달하는 경우가 많아요. 예를 들어 사진 속 사과를 찾을 때 색이나 둥근 정도를 사람이 정할 수 있어요.</p>
        <div class="feature-flow"><span>원본 데이터</span><b>→</b><span>사람이 특징 설계</span><b>→</b><span>모델 학습</span></div>
      </article>
      <article class="feature-card deep">
        <h4><span>DL</span> 딥러닝의 특징</h4>
        <p>여러 층의 인공신경망이 원본 데이터에서 유용한 표현과 특징을 함께 학습해요. 데이터와 계산 자원이 많이 필요할 수 있지만, 복잡한 이미지나 음성에서 강점을 보여요.</p>
        <div class="feature-flow"><span>원본 데이터</span><b>→</b><span>신경망이 특징 학습</span><b>→</b><span>예측</span></div>
      </article>
    </div>
    <div class="callout"><span aria-hidden="true">✳</span><span>이 차이는 대표적인 경향을 설명해요. 실제 머신러닝에서도 특징을 자동으로 만들 수 있고, 딥러닝에서도 데이터 준비와 설계는 여전히 중요해요.</span></div>
  </section>

  <section class="lesson-section" id="pipeline" data-searchable aria-labelledby="pipelineTitle">
    <div class="section-title-row"><span class="section-index">03</span><div><h3 id="pipelineTitle">AI는 데이터를 이렇게 배워요</h3><p>데이터 입력부터 예측과 평가까지, 기본 학습 파이프라인을 따라가 봐요.</p></div></div>
    <div class="pipeline" aria-label="데이터 입력에서 예측과 평가까지의 학습 과정">
      <article class="pipeline-step"><span>STEP 01</span><h4>데이터 입력</h4><p>문제에 맞는 예시와, 지도학습이라면 각 예시의 정답을 준비해요.</p><code>입력 x · 정답 y</code></article>
      <article class="pipeline-step"><span>STEP 02</span><h4>모델 학습</h4><p>예측과 정답의 차이인 손실을 계산하고, 손실이 작아지도록 가중치를 업데이트해요.</p><code>손실 계산 → 가중치 갱신</code></article>
      <article class="pipeline-step"><span>STEP 03</span><h4>예측 및 평가</h4><p>학습에 쓰지 않은 데이터에도 예측해 보고, 모델이 잘 작동하는지 평가해요.</p><code>새 입력 → 예측 → 평가</code></article>
    </div>
    <div class="formula-strip">학습의 목표를 간단히 쓰면 <strong>손실을 줄이는 방향으로 가중치 조정</strong>이에요. 아래 실험에서 한 번의 업데이트를 직접 계산해 볼게요.</div>
  </section>

  <section class="lesson-section" id="experiment" data-searchable aria-labelledby="experimentTitle">
    <div class="section-title-row"><span class="section-index">04</span><div><h3 id="experimentTitle">가중치를 한 번 업데이트해 봐요</h3><p>슬라이더를 바꾸면 예측, 손실, 업데이트된 모델 그래프가 함께 바뀌어요.</p></div></div>
    <div class="experiment-card">
      <p class="experiment-intro">간단한 선형 모델 <strong>예측값 = 가중치 × 입력값</strong>을 사용해요. 입력 하나와 정답 하나로 제곱 오차를 계산하고, 기울기 방향으로 가중치를 한 번 움직여요.</p>
      <div class="experiment-body">
        <div class="controls-panel" aria-label="학습 실험 입력값">
          <div class="control-row"><label for="demoX">입력값 x</label><output id="demoXValue" for="demoX">2</output><input id="demoX" type="range" min="1" max="6" step="1" value="2" /></div>
          <div class="control-row"><label for="demoTarget">정답 y</label><output id="demoTargetValue" for="demoTarget">6</output><input id="demoTarget" type="range" min="1" max="10" step="1" value="6" /></div>
          <div class="control-row"><label for="demoWeight">현재 가중치 w</label><output id="demoWeightValue" for="demoWeight">1.00</output><input id="demoWeight" type="range" min="0" max="5" step="0.1" value="1" /></div>
          <div class="control-row"><label for="demoRate">학습률 η</label><output id="demoRateValue" for="demoRate">0.05</output><input id="demoRate" type="range" min="0.01" max="0.2" step="0.01" value="0.05" /></div>
        </div>
        <div class="result-panel">
          <h4>한 번 학습한 결과</h4>
          <div class="result-metrics">
            <div class="metric"><span>업데이트 전 예측</span><strong id="beforePrediction">2.00</strong></div>
            <div class="metric"><span>업데이트 전 손실</span><strong id="beforeLoss">16.00</strong></div>
            <div class="metric"><span>업데이트 후 손실</span><strong id="afterLoss">5.76</strong></div>
          </div>
          <div class="chart-wrap">
            <svg class="learning-chart" viewBox="0 0 400 194" role="img" aria-labelledby="chartTitle chartDescription">
              <title id="chartTitle">가중치 업데이트 전후의 예측선</title>
              <desc id="chartDescription">주황색 점은 정답 데이터, 회색 점선은 업데이트 전, 파란 선은 업데이트 후의 모델 예측입니다.</desc>
              <line class="chart-grid" x1="42" y1="28" x2="382" y2="28"/><line class="chart-grid" x1="42" y1="63" x2="382" y2="63"/><line class="chart-grid" x1="42" y1="98" x2="382" y2="98"/><line class="chart-grid" x1="42" y1="133" x2="382" y2="133"/>
              <line class="chart-axis" x1="42" y1="168" x2="382" y2="168"/><line class="chart-axis" x1="42" y1="20" x2="42" y2="168"/>
              <text class="chart-label" x="24" y="171">0</text><text class="chart-label" x="20" y="136">8</text><text class="chart-label" x="16" y="101">16</text><text class="chart-label" x="16" y="66">24</text><text class="chart-label" x="16" y="31">32</text>
              <text class="chart-label" x="40" y="184">0</text><text class="chart-label" x="207" y="184">3</text><text class="chart-label" x="375" y="184">6</text>
              <path id="beforeLine" class="chart-line-before" d="M42 168 L382 159.25"/><path id="afterLine" class="chart-line-after" d="M42 168 L382 152.25"/><circle id="targetPoint" class="chart-target" cx="155.3" cy="141.75" r="5"/>
            </svg>
            <div class="chart-legend"><span><i class="legend-line before"></i>업데이트 전 예측</span><span><i class="legend-line"></i>업데이트 후 예측</span><span><i class="legend-point"></i>정답 데이터</span></div>
          </div>
          <p class="experiment-equation" id="updateEquation">예측값 = 1.00 × 2 = 2.00 · 가중치 1.00 → <strong>1.80</strong>로 업데이트</p>
          <p class="experiment-note">손실은 (예측값 − 정답)²로 계산했어요. 학습률이 너무 크면 손실이 오히려 커질 수 있어요. 이 예시는 원리를 보여주는 단순한 한 점짜리 모델이에요.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="lesson-section" id="quiz" data-searchable aria-labelledby="quizTitle">
    <div class="section-title-row"><span class="section-index">05</span><div><h3 id="quizTitle">핵심 개념을 확인해요</h3><p>세 문제를 풀고 답을 확인하면 이 차시를 완료할 수 있어요.</p></div></div>
    <form id="quizForm">
      <div class="quiz-list">
        <fieldset class="quiz-question" data-question="q1"><legend class="visually-hidden">첫 번째 질문</legend><h4>1. AI, ML, DL의 관계를 바르게 설명한 것은 무엇일까요?</h4><div class="quiz-options">
          <label class="quiz-option"><input type="radio" name="q1" value="a" /><span>AI, ML, DL은 서로 포함 관계가 없는 별개의 분야예요.</span></label>
          <label class="quiz-option"><input type="radio" name="q1" value="b" /><span>DL은 ML의 한 분야이고, ML은 AI의 한 분야예요.</span></label>
          <label class="quiz-option"><input type="radio" name="q1" value="c" /><span>AI는 DL 안에 포함되는 가장 좁은 개념이에요.</span></label>
        </div><p class="quiz-feedback" data-feedback></p></fieldset>
        <fieldset class="quiz-question" data-question="q2"><legend class="visually-hidden">두 번째 질문</legend><h4>2. 딥러닝을 설명하는 문장으로 가장 알맞은 것은 무엇일까요?</h4><div class="quiz-options">
          <label class="quiz-option"><input type="radio" name="q2" value="a" /><span>사람이 정한 규칙만 순서대로 실행하는 방식이에요.</span></label>
          <label class="quiz-option"><input type="radio" name="q2" value="b" /><span>인공신경망을 여러 층으로 쌓아 특징과 패턴을 학습하는 머신러닝 분야예요.</span></label>
          <label class="quiz-option"><input type="radio" name="q2" value="c" /><span>정답 데이터를 사용할 수 없는 경우에만 쓰는 방법이에요.</span></label>
        </div><p class="quiz-feedback" data-feedback></p></fieldset>
        <fieldset class="quiz-question" data-question="q3"><legend class="visually-hidden">세 번째 질문</legend><h4>3. 지도학습에서 모델이 패턴을 배우도록 준비하는 것은 무엇일까요?</h4><div class="quiz-options">
          <label class="quiz-option"><input type="radio" name="q3" value="a" /><span>입력 데이터와 그에 대응하는 정답</span></label>
          <label class="quiz-option"><input type="radio" name="q3" value="b" /><span>학습이 끝난 모델의 이름만</span></label>
          <label class="quiz-option"><input type="radio" name="q3" value="c" /><span>그래프의 색상과 화면 크기</span></label>
        </div><p class="quiz-feedback" data-feedback></p></fieldset>
      </div>
      <div class="quiz-actions"><button class="button button-primary" type="submit">정답 확인하기</button><span class="quiz-result" id="quizResult" aria-live="polite">아직 답을 확인하지 않았어요.</span></div>
    </form>
    <div class="completion-row"><p>퀴즈를 마친 뒤 완료 표시를 남기면 진행도가 저장돼요.<br />이 기기의 브라우저에만 저장됩니다.</p><button class="button button-secondary" id="completeLesson" type="button" aria-pressed="false">이 차시 학습 완료</button></div>
    <nav class="lesson-pagination" aria-label="차시 이동"><span class="pagination-link" aria-disabled="true">← 이전 차시</span><span class="unit-code">BASE-01 / 01</span><span class="pagination-link" aria-disabled="true">다음 차시 준비 중 →</span></nav>
  </section>`;

const answers = {
  q1: { value: 'b', correct: '맞아요. 포함 관계는 DL ⊂ ML ⊂ AI예요.', incorrect: 'AI가 가장 넓고, 그 안에 ML, 그 안에 DL이 들어가요.' },
  q2: { value: 'b', correct: '맞아요. 딥러닝은 여러 층의 인공신경망으로 특징과 패턴을 배워요.', incorrect: '딥러닝은 머신러닝의 한 분야이며, 여러 층의 인공신경망을 사용해요.' },
  q3: { value: 'a', correct: '맞아요. 지도학습은 입력과 그에 대응하는 정답 예시를 함께 사용해요.', incorrect: '지도학습에서는 입력 데이터와 그에 대응하는 정답을 함께 준비해요.' },
};

export function renderBaseLesson(mount, setComplete) {
  mount.innerHTML = lessonMarkup;
  setupExperiment(mount);
  setupQuiz(mount, setComplete);
}

function setupExperiment(mount) {
  const inputs = {
    x: mount.querySelector('#demoX'),
    target: mount.querySelector('#demoTarget'),
    weight: mount.querySelector('#demoWeight'),
    rate: mount.querySelector('#demoRate'),
  };
  const values = {
    x: mount.querySelector('#demoXValue'),
    target: mount.querySelector('#demoTargetValue'),
    weight: mount.querySelector('#demoWeightValue'),
    rate: mount.querySelector('#demoRateValue'),
  };
  const outputs = {
    beforePrediction: mount.querySelector('#beforePrediction'),
    beforeLoss: mount.querySelector('#beforeLoss'),
    afterLoss: mount.querySelector('#afterLoss'),
    beforeLine: mount.querySelector('#beforeLine'),
    afterLine: mount.querySelector('#afterLine'),
    targetPoint: mount.querySelector('#targetPoint'),
    equation: mount.querySelector('#updateEquation'),
  };
  const format = (number) => Number(number).toFixed(2);
  const chartX = (value) => 42 + (value / 6) * 340;
  const chartY = (value) => 168 - (Math.max(0, Math.min(32, value)) / 32) * 140;

  function update() {
    const x = Number(inputs.x.value);
    const target = Number(inputs.target.value);
    const weight = Number(inputs.weight.value);
    const rate = Number(inputs.rate.value);
    const prediction = weight * x;
    const loss = (prediction - target) ** 2;
    const gradient = 2 * (prediction - target) * x;
    const updatedWeight = weight - rate * gradient;
    const updatedPrediction = updatedWeight * x;
    const updatedLoss = (updatedPrediction - target) ** 2;

    values.x.value = format(x);
    values.target.value = format(target);
    values.weight.value = format(weight);
    values.rate.value = format(rate);
    outputs.beforePrediction.textContent = format(prediction);
    outputs.beforeLoss.textContent = format(loss);
    outputs.afterLoss.textContent = format(updatedLoss);
    outputs.beforeLine.setAttribute('d', `M42 ${chartY(0)} L382 ${chartY(weight * 6)}`);
    outputs.afterLine.setAttribute('d', `M42 ${chartY(0)} L382 ${chartY(updatedWeight * 6)}`);
    outputs.targetPoint.setAttribute('cx', format(chartX(x)));
    outputs.targetPoint.setAttribute('cy', format(chartY(target)));
    outputs.equation.innerHTML = `예측값 = ${format(weight)} × ${format(x)} = ${format(prediction)} · 가중치 ${format(weight)} → <strong>${format(updatedWeight)}</strong>로 업데이트`;
  }

  Object.values(inputs).forEach((input) => input.addEventListener('input', update));
  update();
}

function setupQuiz(mount, setComplete) {
  const form = mount.querySelector('#quizForm');
  const result = mount.querySelector('#quizResult');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let correctCount = 0;
    Object.entries(answers).forEach(([name, answer]) => {
      const question = mount.querySelector(`[data-question="${name}"]`);
      const selected = form.querySelector(`input[name="${name}"]:checked`);
      const feedback = question.querySelector('[data-feedback]');
      const isCorrect = selected?.value === answer.value;
      question.classList.toggle('is-correct', Boolean(isCorrect));
      question.classList.toggle('is-incorrect', Boolean(selected && !isCorrect));
      feedback.textContent = isCorrect ? answer.correct : answer.incorrect;
      if (isCorrect) correctCount += 1;
    });
    result.textContent = `${Object.keys(answers).length}문제 중 ${correctCount}문제 정답이에요.`;
    if (correctCount === Object.keys(answers).length) {
      result.textContent += ' 모두 이해했어요!';
      setComplete(true);
    }
  });

  const completeButton = mount.querySelector('#completeLesson');
  let completed = localStorage.getItem('ain-progress:base-01') === 'done';
  completeButton.addEventListener('click', () => {
    completed = !completed;
    setComplete(completed);
  });
}
