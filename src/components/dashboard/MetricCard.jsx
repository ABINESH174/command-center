import { motion } from "framer-motion";

function MetricCard({ title, value }) {
  return (
    <motion.div
      className="card"
      whileHover={{
        y: -5,
      }}
    >
      <h3 className="mb-4 text-gray-400">{title}</h3>

      <div className="mb-3 text-3xl font-bold">{value}%</div>

      <div className="h-2 overflow-hidden rounded-full bg-gray-700">
        <motion.div
          className="h-full rounded-full bg-blue-500"
          initial={{
            width: 0,
          }}
          whileInView={{
            width: `${value}%`,
          }}
          transition={{
            duration: 1.5,
          }}
        />
      </div>
    </motion.div>
  );
}

export default MetricCard;
