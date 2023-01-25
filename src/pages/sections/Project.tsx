import { useRef } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import PROJECT_LIST from '@/constants/project';

import Animation from '@/components/Animation';
import Card from '@/components/Card';

const Project = () => {
  const animationRef = useRef(null);

  return (
    <div ref={animationRef}>
      <h2 className="title">프로젝트</h2>

      <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 600: 2, 1200: 3 }}>
        <Masonry gutter="24px">
          {PROJECT_LIST.map((project, idx) => (
            <Animation key={project.id} direction="bottom" delay={idx * 300} target={animationRef}>
              <Card key={project.id} {...project} />
            </Animation>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Project;
