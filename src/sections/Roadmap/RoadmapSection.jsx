import { roadmap } from "../../data/roadmap";

function RoadmapSection() {
  return (
    <section id="roadmap" className="section-container">
      <h2 className="section-title">Career Trajectory</h2>

      <div className="card">
        <div className="flex flex-wrap items-center gap-4">
          {roadmap.map((step, index) => (
            <div key={step} className="flex items-center gap-4">
              <div
                className="
                  rounded-lg
                  border
                  border-green-500
                  px-4
                  py-3
                "
              >
                {step}
              </div>

              {index < roadmap.length - 1 && (
                <span className="text-green-500">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoadmapSection;
