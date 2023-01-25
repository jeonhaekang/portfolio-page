import Card from '@/components/Card';
import PROJECT_LIST from '@/constants/project';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const Project = () => {
  return (
    <div>
      <h2 className="title">프로젝트</h2>

      <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 600: 2, 1200: 3 }}>
        <Masonry gutter="24px">
          {PROJECT_LIST.map((project) => {
            return <Card key={project.id} {...project} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Project;
