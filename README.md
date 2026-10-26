# Developer Portfolio

React + TypeScript + Vite로 만든 한국어 원페이지 개발자 포트폴리오입니다. 아이보리 배경, 파란색 포인트, 반응형 레이아웃을 사용합니다. 초기 이름과 모든 프로젝트는 **예시**이며 실제 이력이나 성과가 아닙니다.

## 로컬 실행

Node.js 22.13 이상과 pnpm 11.25.0을 사용합니다.

```sh
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install
pnpm dev
```

`http://127.0.0.1:5173`에서 확인할 수 있습니다.

```sh
pnpm typecheck
pnpm build
pnpm preview
```

## 내 콘텐츠로 바꾸기

`src/data/portfolio.ts`에서 이름, 소개, 개발 철학, 프로젝트, 관심 분야와 연락처를 수정합니다. `Portfolio` 및 `Project` 타입이 필수 값을 안내합니다.

- `profile`: 이름, 영문 워드마크, 첫 화면 문구, 자기소개. 줄바꿈은 `\n`을 사용합니다.
- `projects`: 문제, 접근, 역할, 기술 스택. `visual`은 `flow`, `archive`, `system` 중 하나이며 CSS 기반 예시 화면입니다. 실제 작업으로 교체할 때 `src/main.tsx`의 `ProjectVisual`도 실제 화면에 맞게 수정하세요.
- `url`, `repository`: 선택 사항. 실제 HTTPS 링크가 있을 때만 버튼이 나타납니다.
- `contact.email`, `contact.github`: 실제 이메일과 GitHub 프로필 URL을 입력하면 연락 링크가 나타납니다. 비어 있으면 준비 중 안내만 표시합니다.
- 실제 내용으로 모두 교체한 후 `isSample`을 `false`로 바꾸세요. 프로젝트 역할의 `(예시)` 문구도 실제 내용으로 교체하세요.
- `index.html`의 제목과 설명도 본인에 맞게 수정하세요.

색상과 반응형 스타일은 `src/styles.css`에서 변경합니다. Google Fonts를 불러오며 네트워크가 없으면 시스템 글꼴을 사용합니다. 외부 데이터 API나 백엔드는 없습니다.

## GitHub Pages 배포

1. GitHub 저장소를 생성하고 이 프로젝트를 `main` 브랜치에 푸시합니다.
2. 저장소 **Settings → Pages → Build and deployment → Source**에서 **GitHub Actions**를 선택합니다.
3. **Actions → Deploy portfolio to GitHub Pages → Run workflow**를 실행하거나 `main`에 새 커밋을 푸시합니다.
4. 성공한 워크플로의 `github-pages` 환경에서 공개 URL을 확인합니다.

워크플로는 Pages에서 받은 `base_path`를 빌드에 적용합니다. `username.github.io` 저장소의 루트 주소와 일반 저장소의 `/repository/` 주소를 모두 지원합니다. 기본 브랜치가 다르면 워크플로의 `branches`를 수정하세요. 대상 저장소는 아직 연결되어 있지 않으며, 로컬 작업만으로 공개 배포되지는 않습니다.

프로젝트 경로를 로컬에서 확인하려면:

```sh
pnpm exec vite build --base /portfolio/
pnpm preview
```

`http://127.0.0.1:4173/portfolio/`를 열어 확인합니다. 다시 `pnpm build`하면 루트 경로 빌드로 돌아갑니다. 원페이지의 해시 앵커를 사용하므로 SPA 경로용 404 우회는 필요하지 않습니다.

## 확인 사항

- 375px, 768px, 1440px에서 줄바꿈과 가로 넘침 확인
- 상단 메뉴와 프로젝트 버튼, 맨 위로 링크 이동 확인
- Tab 키로 본문 건너뛰기와 링크의 포커스 표시 확인
- OS의 동작 줄이기 설정에서 부드러운 스크롤 비활성화 확인
- 루트 및 하위 경로에서 새로고침과 정적 자산 로드 확인
