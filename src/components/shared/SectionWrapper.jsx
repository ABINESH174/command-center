import { motion } from "framer-motion";

function SectionWrapper({ children, animation = "fade" }) {
  const variants = {
    fade: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
      },
    },

    slide: {
      hidden: {
        opacity: 0,
        y: 40,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    },

    reveal: {
      hidden: {
        opacity: 0,
        scale: 0.96,
      },
      visible: {
        opacity: 1,
        scale: 1,
      },
    },

    expand: {
      hidden: {
        opacity: 0,
        height: 0,
      },
      visible: {
        opacity: 1,
        height: "auto",
      },
    },
  };

  return (
    <motion.div
      variants={variants[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      {children}
    </motion.div>
  );
}

export default SectionWrapper;
