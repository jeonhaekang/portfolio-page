import { ICard } from '@/types/common';
import { getImageUrl } from '@/utils/common';

const EXPERIENCE_LIST: ICard[] = [
  {
    id: 1,
    imageUrl: getImageUrl('tendom.png'),
    title: '텐덤',
    subTitle: '프론트엔드 개발자',
    desc: "에듀테크 스타트업 '텐덤'에서 프론트엔드 개발자로 근무하였습니다. \n\n 취업 플랫폼 커리어월렛 Beta2 서비스 개발에 참가하였습니다.",
    link: 'https://www.tendom.co.kr',
  },
  {
    id: 2,
    imageUrl: getImageUrl('hanghae.png'),
    title: '항해99',
    subTitle: '프론트엔드 개발자',
    desc: '부트캠프 항해99 프론트엔드 과정을 수료하였습니다. \n\n 비전공자로 시작해 빠르게 성장하여 마지막 프로젝트에서 프론트엔드 팀장으로 발탁되는 성과를 이루었습니다. \n\n 매주 랜덤으로 지정되는 팀원들과, 동료 학습의 중요성을 경험하였으며 \n\n 총 3번의 협업 프로젝트를 통해 백엔드, 디자이너와 소통하는 방법을 터득하였습니다.',
    link: 'https://hanghae99.spartacodingclub.kr',
  },
  {
    id: 3,
    imageUrl: getImageUrl('hanghae.png'),
    title: '항해99',
    subTitle: 'React 기술 매니저',
    desc: '부트캠프 항해99 9, 10기 기술 매니저로 활동하였습니다. \n\n 코딩을 처음 접하는 사람들에게 알기 쉽게 설명하여 좋은 평가를 받은 바 있습니다.',
    link: 'https://hanghae99.spartacodingclub.kr',
  },
  {
    id: 4,
    imageUrl: getImageUrl('wanted.png'),
    title: '원티드',
    subTitle: '원티드 프론트엔드 온보딩 코스',
    desc: '원티드 인턴쉽 프로그램에 참여하여, 동료 학습을 통해 기업 과제를 수행하였습니다.',
    link: 'https://www.wanted.co.kr/events/pre_ob_fe_8?utm_source=email&utm_medi=braze_learning&utm_campaign=learning_pre_ob_fe_8',
  },
];

export default EXPERIENCE_LIST;
