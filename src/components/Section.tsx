import styles from '@/styles/components/Section.module.scss';

import { useSection } from '@/contexts/SectionContext';
import { ReactNode } from 'react';
import cn from '@/styles';

interface IProps {
  name: string;
  color?: 'orange' | 'yellow' | 'blue' | 'pink';
  position?: 'default' | 'center';
  full?: boolean;
  children: ReactNode;
}

const Section = ({ name, color = 'orange', position = 'default', full, children }: IProps) => {
  const { register } = useSection();

  return (
    <section
      className={cn(styles.section, styles[color], styles[position], { [styles.full]: full })}
      {...register(name)}
    >
      {children}
    </section>
  );
};

export default Section;
