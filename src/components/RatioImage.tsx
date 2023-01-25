import { useMemo } from 'react';
import styles from '@/styles/components/RatioImage.module.scss';

interface IProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const RatioImage = ({ src, alt, width = 2, height = 1 }: IProps) => {
  const paddingTop = useMemo(() => {
    return (height / width) * 100 + '%';
  }, [height, width]);

  return (
    <div className={styles.outer} style={{ paddingTop: paddingTop }}>
      <img className={styles.inner} src={src} alt={alt} />
    </div>
  );
};

export default RatioImage;
