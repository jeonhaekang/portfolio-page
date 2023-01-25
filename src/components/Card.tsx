import styles from '@/styles/components/Card.module.scss';
import { IProject } from '@/types/project';
import RatioImage from './RatioImage';

const Card = ({ imageUrl, title, subTitle, desc, link }: IProject) => {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        <RatioImage src={imageUrl} alt="썸네일" />

        <h3 className={styles.title}>{title}</h3>
      </div>

      <div className={styles.content}>
        <p className={styles.subTitle}>{subTitle}</p>

        <p className={styles.desc}>{desc}</p>

        <a href={link} className={styles.link} target="_blank" rel="noreferrer">
          자세히 보기
        </a>
      </div>
    </div>
  );
};

export default Card;
