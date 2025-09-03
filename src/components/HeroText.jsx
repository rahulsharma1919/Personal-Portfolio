import { motion } from "motion/react";
import { FlipWords } from "./FlipWords";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  const scrollToNext = () => {
    const nextSection = document.getElementById("about"); // Change 'about' to your section id
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="text-4xl font-medium"
        >
          Hi I'm Rahul
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            className="text-5xl font-medium text-neutral-300"
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
            className="text-4xl font-medium text-neutral-300"
          >
            Web Solutions
          </motion.p>
          {/* Scroll down arrow */}
          <div
            onClick={scrollToNext}
            className="absolute bottom-5 left-8 flex items-center cursor-pointer"
          >
            {/* Arrow with light reflection */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              strokeWidth="1.5"
              className="relative"
            >
              {/* Create arrow shape */}
              <path d="M6 9l6 6 6-6" /> {/* Chevron down */}
              <path d="M6 15l6 6 6-6" /> {/* Chevron down */}
              {/* Light reflection effect */}
              <defs>
                <linearGradient id="shine" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="50%" stopColor="white" stopOpacity="0.9" />
                </linearGradient>
                <mask id="shine-mask">
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="url(#shine)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0 -40; 0 40"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </mask>
              </defs>
              {/* Apply mask to arrow */}
              <g mask="url(#shine-mask)">
                <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="1" />
                <path d="M6 15l6 6 6-6" stroke="white" strokeWidth="1" />
              </g>
            </svg>

            {/* Text beside arrow */}
            <span className="text-white text-lg tracking-wide mt-2">
              Scroll Down
            </span>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="text-4xl font-medium"
        >
          Hi, I'm Rahul
        </motion.p>
        <div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            className="text-5xl font-black text-neutral-300"
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
            className="text-4xl font-black text-neutral-300"
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
