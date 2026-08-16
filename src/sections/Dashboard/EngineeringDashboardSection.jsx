import MetricCard from "../../components/dashboard/MetricCard";

import { dashboardMetrics } from "../../data/dashboardMetrics";

function EngineeringDashboardSection() {
  return (
    <section className="section-container">
      <h2 className="section-title">Engineering Dashboard</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dashboardMetrics.map((metric) => (
          <MetricCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
          />
        ))}
      </div>
    </section>
  );
}

export default EngineeringDashboardSection;
