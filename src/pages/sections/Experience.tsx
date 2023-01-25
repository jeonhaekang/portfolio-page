import Card from '@/components/Card';
import EXPERIENCE_LIST from '@/constants/experience';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const Experience = () => {
  return (
    <div>
      <h2 className="title">경험</h2>

      <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 600: 2, 1200: 3 }}>
        <Masonry gutter="24px">
          {EXPERIENCE_LIST.map((experience) => {
            return <Card key={experience.id} {...experience} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Experience;
