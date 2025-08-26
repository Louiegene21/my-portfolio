import Layout from './components/Layout';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import './index.css';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <Layout>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
    <ScrollToTop />
   </>
  );
}

export default App;
