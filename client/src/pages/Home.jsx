import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ProjectsGrid from '../components/ProjectsGrid';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="page-content">
      <Hero />
      <Stats />
      <ProjectsGrid limit={3} showFilter={false} />
      <Skills />
      <Contact />
    </div>
  );
}
