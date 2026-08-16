const icons = {
  Docker: "🐳",
  Kubernetes: "☸",
  Jenkins: "⚙",
  AWS: "☁",
  Prometheus: "🔥",
  Grafana: "📊",
  Linux: "🐧",
};

function SkillBadge({ skill }) {
  return (
    <div
      className="
        flex
        items-center
        gap-2
        rounded-lg
        border
        border-gray-700
        px-4
        py-2
        text-sm
        transition
        hover:border-green-500
        hover:text-green-500
      "
    >
      <span>{icons[skill] || "•"}</span>

      <span>{skill}</span>
    </div>
  );
}

export default SkillBadge;
