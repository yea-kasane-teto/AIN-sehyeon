# AIN-sehyeon

AIN의 학습 영역을 별도 저장소에서 제공하는 정적 웹 앱입니다. 메인 화면에서 `?module=base` 주소로 이동하면 같은 창에서 AI 기초 단원을 엽니다.

## 구조

- `src/app.js`: `module` 쿼리 값을 읽고 학습 영역을 연결합니다.
- `src/modules/registry.js`: `base` 학습 영역을 등록합니다.
- `src/modules/base/index.js`: AI 기초 공통 화면과 목차를 만듭니다.
- `src/modules/base/lessons/base-01.js`: AI·ML·DL 개념, 계층 표, 학습 과정, 실험과 퀴즈를 담습니다.
- `src/modules/base/base.css`: 기초 영역 전용 반응형 스타일입니다.

## 배포

`main` 브랜치에 푸시하면 GitHub Actions가 정적 파일을 GitHub Pages에 배포합니다. Pages 주소는 `https://yea-kasane-teto.github.io/AIN-sehyeon/?module=base`입니다.

새 단원은 `src/modules/base/lessons/base-02.js`처럼 파일을 분리해 목차와 연결하면 됩니다. 다른 영역은 `src/modules/<영역>/`에 화면과 스타일을 두고 레지스트리에 등록합니다.
