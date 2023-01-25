import styles from '@/styles/pages/Intro.module.scss';

import Animation from '@/components/Animation';
import avatar from '@/assets/images/my_avatar.png';
import Image from 'next/image';
import { getImageUrl } from '@/utils/common';
import { useRef } from 'react';
import { IoLogoGithub, IoMail, IoLibrary } from 'react-icons/io5';

const Intro = () => {
  const introRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={introRef} className={styles.intro}>
        <Animation direction="bottom" target={introRef}>
          <img className={styles.avatar} src={getImageUrl('my_avatar.png')} alt="아바타" />
        </Animation>

        <Animation direction="bottom" target={introRef} delay={700}>
          <h2 className="title">안녕하세요!</h2>
        </Animation>

        <Animation direction="bottom" target={introRef} delay={1000}>
          <p className="desc">
            신입 프론트엔드 개발자 전해강 입니다. <br /> 좋은 개발자는
            <span className="bold"> 몰입하는 개발자</span> 라고 생각합니다.
            <br /> 주어진 과제에 <span className="bold"> 몰입하여 능동적</span>으로 해결해 나가겠습니다.
          </p>
        </Animation>
      </div>

      <div className={styles.iconBox}>
        <a href="https://github.com/jeonhaekang" target="_blank" rel="noreferrer">
          <IoLogoGithub size={20} />
        </a>

        <a href="mailto:1003gorkd@naver.com">
          <IoMail size={20} />
        </a>

        <a href="https://velog.io/@1003gorkd" target="_blank" rel="noreferrer">
          <IoLibrary size={20} />
        </a>
      </div>
    </>
  );
};

export default Intro;
