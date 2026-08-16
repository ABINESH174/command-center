import TimelineItem from "../../components/timeline/TimelineItem";

import { experience } from "../../data/experience";

function ExperienceSection() {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Experience Timeline</h2>

      <div className="space-y-12">
        {experience.map((item) => (
          <TimelineItem
            key={item.title}
            title={item.title}
            company={item.company}
            duration={item.duration}
            achievements={item.achievements}
          />
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
