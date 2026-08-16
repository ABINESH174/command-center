import RadarWidget from "../../components/dashboard/RadarWidget";
import { siteConfig } from "../../config/siteConfig";

function ObservabilitySection() {
  return (
    <section className="section-container">
      <h2 className="section-title">Observability Center</h2>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card">
          <h3 className="mb-6 text-xl font-bold">Monitoring Stack</h3>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Prometheus</span>

              <span className="text-green-500">ONLINE</span>
            </div>

            <div className="flex justify-between">
              <span>Grafana</span>

              <span className="text-green-500">ONLINE</span>
            </div>

            <div className="flex justify-between">
              <span>Alerting</span>

              <span className="text-green-500">ACTIVE</span>
            </div>

            <div className="flex justify-between">
              <span>Metrics</span>

              <span className="text-green-500">STREAMING</span>
            </div>
          </div>
        </div>

        {siteConfig.roboticsRadarEnabled && <RadarWidget />}
      </div>
    </section>
  );
}

export default ObservabilitySection;
