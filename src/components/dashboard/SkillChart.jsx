import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

import { dashboardMetrics } from "../../data/dashboardMetrics";

// Haven't used this skillchart, it's for dashboard section.
function SkillChart() {
  return (
    <div className="card h-96">
      <h3 className="mb-6 text-xl font-bold">Infrastructure Metrics</h3>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={dashboardMetrics}>
          <XAxis dataKey="title" />

          <YAxis />

          <Bar dataKey="value" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SkillChart;
