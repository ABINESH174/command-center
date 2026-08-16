import ArchitectureFlow from "../../components/infrastructure/ArchitectureFlow";

function InfrastructureSection() {
  const infrastructure = [
    "Linux",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Prometheus",
    "Grafana",
  ];

  return (
    <section className="section-container">
      <h2 className="section-title">Infrastructure Map</h2>

      <p className="mb-8 text-gray-400">
        The technologies that define my engineering ecosystem.
      </p>

      <ArchitectureFlow nodes={infrastructure} />
    </section>
  );
}

export default InfrastructureSection;
