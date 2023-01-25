import Section from '@/components/Section';
import Head from 'next/head';
import Experience from './sections/Experience';
import Intro from './sections/Intro';
import Project from './sections/Project';

export default function Home() {
  return (
    <>
      <Head>
        <title>전해강 | 포트폴리오</title>
        <meta name="description" content="주니어 프론트엔드 개발자 전해강 입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
