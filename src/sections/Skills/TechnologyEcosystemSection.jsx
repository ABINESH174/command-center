import SkillBadge from "../../components/ui/SkillBadge";

import { skills } from "../../data/skills";

function TechnologyEcosystemSection() {
  return (
    <section className="section-container">
      <h2 className="section-title">Technology Ecosystem</h2>

      <div className="space-y-10">
        {Object.entries(skills).map(([category, technologies]) => (
          <div key={category}>
            <h3 className="mb-5 text-xl font-bold uppercase text-green-500">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {technologies.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechnologyEcosystemSection;
