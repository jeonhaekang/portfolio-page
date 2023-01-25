import Section from '@/components/Section';
import Experience from './sections/Experience';
import Intro from './sections/Intro';
import Project from './sections/Project';

export default function Home() {
  return (
    <>
      <Section name="Intro" position="center" full>
        <Intro />
      </Section>

      <Section name="Project" color="blue">
        <Project />
      </Section>

      <Section name="Experience" color="pink">
        <Experience />
      </Section>
    </>
  );
}
