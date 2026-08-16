function TimelineItem({ title, company, duration, achievements }) {
  return (
    <div
      className="
        relative
        border-l-2
        border-green-500
        pl-8
      "
    >
      <div
        className="
          absolute
          -left-2
          top-0
          h-4
          w-4
          rounded-full
          bg-green-500
        "
      ></div>

      <h3 className="text-2xl font-bold">{title}</h3>

      <p className="mb-2 text-blue-400">{company}</p>

      <p className="mb-6 text-gray-500">{duration}</p>

      <ul className="space-y-3 text-gray-400">
        {achievements.map((achievement) => (
          <li key={achievement}>• {achievement}</li>
        ))}
      </ul>
    </div>
  );
}

export default TimelineItem;
