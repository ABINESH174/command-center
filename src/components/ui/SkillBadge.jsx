function SkillBadge({ skill }) {
  return (
    <div
      className="
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
      {skill}
    </div>
  );
}

export default SkillBadge;
