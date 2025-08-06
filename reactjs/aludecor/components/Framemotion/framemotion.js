"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedText = ({ text }) => {
  const words = text.split(" "); // Split by words

  // Controls animation on scroll
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  // Variants for word animations
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: index * 0.2 }, // Staggered animation for words
    }),
  };

  return (
    <div ref={ref} className="wrdbraeak">
      {words.map((word, index) => (
        <motion.label
          key={`${word}-${index}`} // Unique key for each word
          variants={wordVariants}
          initial="hidden"
          animate={controls} // Controlled by scroll
          custom={index} // Pass index for stagger effect
          className="inlinearea" // Keep words spaced correctly
        >
          {word}
        </motion.label>
      ))}
    </div>
  );
};

export default AnimatedText;
