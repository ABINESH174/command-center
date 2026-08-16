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

function App() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <SystemStatusSection />

      <EngineeringDashboardSection />

      <TechnologyEcosystemSection />

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
