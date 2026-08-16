import ArchitectureFlow from "../infrastructure/ArchitectureFlow";

function ProjectCard({ title, description, architecture, technologies }) {
  return (
    <div className="card">
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>

      <p className="mb-8 text-gray-400">{description}</p>

      <ArchitectureFlow nodes={architecture} />

      <div className="mt-8 flex flex-wrap gap-3">
        {technologies.map((technology) => (
          <div
            key={technology}
            className="
              rounded-lg
              bg-blue-500/20
              px-3
              py-2
              text-sm
            "
          >
            {technology}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
