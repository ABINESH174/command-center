import { motion } from "framer-motion";

import AnimatedTerminal from "../../components/terminal/AnimatedTerminal";

import { profile } from "../../data/profile";

function HeroSection() {
  return (
    <section className="section-container">
      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-green-500 terminal-font">
            ENGINEERING COMMAND CENTER
          </p>

          <h1 className="mb-6 text-6xl font-bold">{profile.name}</h1>

          <h2 className="mb-6 text-2xl text-blue-400">{profile.currentRole}</h2>

          <p className="mb-4 text-xl text-gray-300">→ {profile.futureRole}</p>

          <p className="max-w-xl text-gray-400">{profile.description}</p>
        </motion.div>

        <AnimatedTerminal />
      </div>
    </section>
  );
}

export default HeroSection;
