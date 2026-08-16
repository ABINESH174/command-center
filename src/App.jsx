import Navbar from "./sections/Navbar/Navbar";
import HeroSection from "./sections/Hero/HeroSection";
import SystemStatusSection from "./sections/Status/SystemStatusSection";
import EngineeringDashboardSection from "./sections/Dashboard/EngineeringDashboardSection";
import TechnologyEcosystemSection from "./sections/Skills/TechnologyEcosystemSection";
import InfrastructureSection from "./sections/Infrastructure/InfrastructureSection";
import ProjectsSection from "./sections/Projects/ProjectsSection";
import ExperienceSection from "./sections/Experience/ExperienceSection";
import ObservabilitySection from "./sections/Observability/ObservabilitySection";
import RoadmapSection from "./sections/Roadmap/RoadmapSection";
import FooterSection from "./sections/Footer/FooterSection";

import SectionWrapper from "./components/shared/SectionWrapper";

function App() {
  return (
    <>
      <Navbar />

      {/* The SectionWrapper provides section transitions, But it's not working, need to work on that... */}
      <SectionWrapper animation="fade">
        <HeroSection />
      </SectionWrapper>

      <SectionWrapper animation="slide">
        <SystemStatusSection />
      </SectionWrapper>

      <SectionWrapper animation="reveal">
        <EngineeringDashboardSection />
      </SectionWrapper>

      <SectionWrapper animation="expand">
        <TechnologyEcosystemSection />
      </SectionWrapper>

      <InfrastructureSection />

      <ProjectsSection />

      <ExperienceSection />

      <ObservabilitySection />

      <RoadmapSection />

      <FooterSection />
    </>
  );
}

export default App;
