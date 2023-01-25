import { useRef } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import EXPERIENCE_LIST from '@/constants/experience';

import Animation from '@/components/Animation';
import Card from '@/components/Card';

const Experience = () => {
  const animationRef = useRef(null);

  return (
    <div ref={animationRef}>
      <h2 className="title">경험</h2>

      <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 600: 2, 1200: 3 }}>
        <Masonry gutter="24px">
          {EXPERIENCE_LIST.map((experience, idx) => (
            <Animation key={experience.id} direction="bottom" delay={idx * 300} target={animationRef}>
              <Card key={experience.id} {...experience} />
            </Animation>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Experience;
