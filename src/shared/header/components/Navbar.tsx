import styles from '@/styles/shared/Navbar.module.scss';

import { useSection } from '@/contexts/SectionContext';
import { useEffect, useRef, useState } from 'react';
import { ISection } from '@/types/section';

const Navbar = () => {
  const { sections } = useSection();

  const [items, setItems] = useState<ISection[]>([]);
  const [selectedItem, setSelectedItem] = useState<ISection | null>(null);

  const lineRef = useRef<HTMLElement>(null);
  const selectedItemRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (selectedItemRef.current && lineRef.current) {
      const { offsetLeft, offsetWidth } = selectedItemRef.current;

      lineRef.current.style.width = `${offsetWidth}px`;
      lineRef.current.style.left = `${offsetLeft}px`;
    }
  }, [selectedItem]);

  useEffect(() => {
    sections.current.forEach((section) => {
      const observer = new IntersectionObserver(([{ isIntersecting }]) => isIntersecting && setSelectedItem(section), {
        rootMargin: `-${window.innerHeight / 2 - 1}px 0px`,
      });

      observer.observe(section.element);
    });

    setItems(sections.current);
  }, [sections]);

  return (
    <nav className={styles.navbar}>
      {items.map((item) => {
        const { id, name, element } = item;

        return (
          <a
            key={id}
            ref={(el) => {
              if (selectedItem?.id === id) {
                selectedItemRef.current = el;
              }
            }}
            onClick={() => {
              element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {name}
          </a>
        );
      })}
      <span ref={lineRef} className={styles.line} />
    </nav>
  );
};

export default Navbar;
