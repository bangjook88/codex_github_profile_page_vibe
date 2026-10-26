export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  problem: string;
  approach: string;
  role: string;
  stack: string[];
  visual: 'flow' | 'archive' | 'system';
  url?: string;
  repository?: string;
}

export interface Portfolio {
  isSample: boolean;
  profile: { name: string; englishName: string; label: string; headline: string; description: string; about: string };
  principles: { title: string; description: string }[];
  projects: Project[];
  interests: { number: string; title: string; description: string; technologies: string[] }[];
  contact: { email?: string; github?: string };
}

export const portfolio: Portfolio = {
  isSample: true,
  profile: {
    name: '김개발', englishName: 'KIM DEV', label: 'Developer & curious maker',
    headline: '작은 불편함에서,\n더 나은 경험으로.',
    description: '사람과 기술 사이를 연결하는 개발자 김개발입니다.\n일상의 문제를 발견하고, 단순하고 오래 쓰이는 답을 만듭니다.',
    about: '코드를 쓰기 전에, 이 기능이 누구의 어떤 문제를 해결하는지 먼저 생각합니다. 복잡한 것을 이해하기 쉽게 정리하고, 작은 실험을 통해 더 나은 방향을 찾아가는 과정을 좋아합니다.',
  },
  principles: [
    { title: '사용자에서 시작합니다', description: '기술보다 먼저 사용자의 맥락을 살피고, 실제로 필요한 경험에 집중합니다.' },
    { title: '단순하게, 단단하게', description: '읽기 쉬운 코드와 명확한 구조로 다음 변화를 받아들일 여유를 만듭니다.' },
    { title: '배움을 나눕니다', description: '시행착오를 기록하고 생각을 공유하며, 함께 더 좋은 답을 찾습니다.' },
  ],
  projects: [
    { id: 'flow', name: 'Flow', category: 'PRODUCTIVITY · WEB APP', description: '해야 할 일보다, 지금 중요한 일에 집중하도록.', problem: '흩어진 할 일과 복잡한 우선순위를 한눈에 정리하기 어렵습니다.', approach: '하루의 핵심 작업을 중심으로 보드와 집중 화면을 설계하는 예시입니다.', role: '개인 프로젝트 · 기획 / UI 설계 / 프론트엔드 (예시)', stack: ['React', 'TypeScript', 'CSS'], visual: 'flow' },
    { id: 'archive', name: '틈, Archive', category: 'KNOWLEDGE · PERSONAL TOOL', description: '스쳐 지나가는 영감을 나만의 지식으로.', problem: '저장한 링크가 쌓여도 필요한 순간에 다시 찾기 어렵습니다.', approach: '주제별 컬렉션과 짧은 메모로 다시 발견하는 경험을 제안합니다.', role: '개인 프로젝트 · 기획 / 디자인 / 프론트엔드 (예시)', stack: ['TypeScript', 'React', 'Local Storage'], visual: 'archive' },
    { id: 'system', name: 'Forma UI', category: 'OPEN SOURCE · DESIGN SYSTEM', description: '일관된 경험을 만드는 작은 구성 요소들.', problem: '화면마다 다른 인터랙션과 스타일이 유지보수를 어렵게 만듭니다.', approach: '공통 디자인 토큰과 접근성을 고려한 컴포넌트 구조를 탐구합니다.', role: '개인 프로젝트 · 컴포넌트 설계 / 문서화 (예시)', stack: ['React', 'CSS Tokens', 'Accessibility'], visual: 'system' },
  ],
  interests: [
    { number: '01', title: '사용하기 좋은 웹', description: '빠르고 편안한 인터페이스, 누구에게나 열린 웹 경험을 만들고 싶습니다.', technologies: ['React', 'TypeScript', 'Web Accessibility'] },
    { number: '02', title: '지속 가능한 구조', description: '작은 컴포넌트부터 일관된 시스템까지, 함께 성장할 수 있는 코드를 고민합니다.', technologies: ['Design Systems', 'Testing', 'Clean Code'] },
    { number: '03', title: '일상을 바꾸는 도구', description: '반복되는 일을 줄이고 생각할 시간을 늘려 주는 작은 도구에 관심이 많습니다.', technologies: ['Automation', 'Developer Experience', 'Side Projects'] },
  ],
  contact: {},
};
