import Layout from './components/Layout';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';

function App() {
  return (
    <Layout>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </Layout>
  );
}

export default App;
