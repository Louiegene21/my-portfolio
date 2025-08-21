import Layout from './components/Layout';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import './index.css';

function App() {
  return (
    <Layout>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
