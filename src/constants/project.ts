import { getImageUrl } from '@/utils/common';
import { ICard } from '@/types/common';

const PROJECT_LIST: ICard[] = [
  {
    id: 1,
    imageUrl: getImageUrl('portfolio.png'),
    title: '포트폴리오',
    subTitle: '포트폴리오 사이트',
    desc: '현재 보시고 계시는 사이트입니다.\n\n 인터렉션 등 애니메이션 기능을 라이브러리 없이 구현해 보는 연습을 진행하였습니다.\n\n 반응형 웹 사이트로 구성되어 있습니다. \n\n React, Javascript, Scss를 사용하였습니다.',
    link: 'https://github.com/jeonhaekang/portfolio-page',
  },
  {
    id: 2,
    imageUrl: getImageUrl('careerwallet.png'),
    title: '커리어월렛',
    subTitle: '취업 플랫폼',
    desc: '커리어월렛 베타 Beta2 서비스 개발에 참여하였으며, \n 개발 초기 단계 프로젝트에 참여함으로 전반적으로 많은 부분에 참여할 수 있었습니다. \n\n 기업 등록, 구직 공고 등록, 기업 지원 등 기업 서비스 기능 개발을 담당하였으며, 스와이퍼, 무한 스크롤 등을 구현하였습니다. \n\n 그밖에 LifeCycle을 활용한 hooks를 통한 페이지 데이터 캐싱등 기능을 구현해 API호출을 감소시켰습니다. \n\n Storybook을 통한 컴포넌트 관리 경험 등 현업에서의 개발 문화 및 사이클을 경험하였습니다. \n\n React, Javascript, Scss, Redux, Context API 등을 사용하였습니다.',
    link: 'https://careerwallet.co.kr/',
  },
  {
    id: 3,
    imageUrl: getImageUrl('dalking.png'),
    title: '덕킹',
    subTitle: '실시간 채팅 플랫폼',
    desc: '부트캠프 최종 프로젝트로 채팅을 통한 밸런스 게임 플랫폼입니다. \n\n 프론트엔드 리더로 프로젝트 관리 및 서비스 런칭을 경험하였으며, 실사용자 100명 이상, 20개의 유저 피드백을 통한 개선 경험을 하였습니다. \n\n 백엔드 및 디자이너와 소통을 경험하였습니다. \n\n 토론 결과에 대한 게시판 기능으로 CRUD 경험을, 다양한 아이템 기능이 추가된 실시간 채팅방 구현을 STOMP를 사용해 구현하였습니다. \n\n React, Styled-component, Redux, Stomp등을 사용하였습니다.',
    link: 'https://haekang.notion.site/DALKING-bdc63dee1509495d8e816c57ebaea314',
  },
];

export default PROJECT_LIST;
