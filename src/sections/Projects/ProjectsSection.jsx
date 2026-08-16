import ProjectCard from "../../components/ui/ProjectCard";

import { projects } from "../../data/projects";

function ProjectsSection() {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Project Architectures</h2>

      <div className="space-y-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            architecture={project.architecture}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
