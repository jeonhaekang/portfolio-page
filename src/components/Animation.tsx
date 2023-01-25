import cn from '@/styles';
import styles from '@/styles/components/Animation.module.scss';

import { ReactNode, RefObject, useCallback, useEffect, useRef, useState } from 'react';

interface IProps {
  target?: RefObject<HTMLElement>;
  type?: 'fadeIn';
  fillMode?: 'forward' | 'none';
  direction?: 'default' | 'bottom' | 'top' | 'left' | 'right';
  delay?: number;
  children: ReactNode;
}

const Animation = ({ target, type = 'fadeIn', direction = 'default', delay = 300, children }: IProps) => {
  const defaultTarget = useRef<HTMLDivElement>(null);
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const [animationPlay, setAnimationPlay] = useState(false);

  const animationController: IntersectionObserverCallback = useCallback(
    ([entry]) => {
      const { isIntersecting } = entry;

      if (isIntersecting) {
        timeout.current = setTimeout(() => setAnimationPlay(true), delay);
      }
    },
    [delay]
  );

  const connectObserver = useCallback(
    (connectTarget: RefObject<HTMLElement>) => {
      const connectedObserver = new IntersectionObserver(animationController);

      if (connectTarget.current) {
        connectedObserver.observe(connectTarget.current);
      }

      return connectedObserver;
    },
    [animationController]
  );

  useEffect(() => {
    observer.current = connectObserver(target || defaultTarget);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [connectObserver, target]);

  return (
    <div
      ref={defaultTarget}
      className={cn(styles.animation, styles[direction], {
        [styles[type]]: animationPlay,
      })}
    >
      {children}
    </div>
  );
};

export default Animation;
