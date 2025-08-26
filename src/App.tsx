import Layout from './components/Layout';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import './index.css';
import ScrollToTop from './components/ScrollToTop';
import SectionDivider from './components/SectionDivider';

function App() {
  return (
    <>
    <Layout>
      <AboutSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <ContactSection />
    </Layout>
    <ScrollToTop />
   </>
  );
}

export default App;
