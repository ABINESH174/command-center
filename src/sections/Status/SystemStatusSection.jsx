import StatusCard from "../../components/ui/StatusCard";

const statuses = [
  ["Linux", "ONLINE"],
  ["Docker", "ONLINE"],
  ["Learning", "ACTIVE"],
  ["Kubernetes", "ONLINE"],
  ["Automation", "ONLINE"],
  ["Dreams", "BUILDING..."],
];

function SystemStatusSection() {
  return (
    <section className="section-container">
      <h2 className="section-title">System Status</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {statuses.map(([title, status]) => (
          <StatusCard key={title} title={title} status={status} />
        ))}
      </div>
    </section>
  );
}

export default SystemStatusSection;
