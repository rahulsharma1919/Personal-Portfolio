"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-12">
        My Work Experience
      </h2>
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-12 md:pt-24 md:gap-10"
          >
            {/* Left side (dot + date/title + logo) */}
            <div className="sticky z-40 flex flex-col items-start self-start top-32 max-w-xs md:w-80">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-neutral-700">
                <div className="w-4 h-4 rounded-full bg-purple-500" />
              </div>

              <div className="hidden md:flex flex-col gap-2 pl-14">
                {/* ✅ Company Logo */}
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={item.job}
                    className="w-10 h-10 rounded-md mb-2 object-contain bg-white p-1"
                  />
                )}
                <p className="text-base text-neutral-400">{item.date}</p>
                <h3 className="text-xl font-semibold text-neutral-200">
                  {item.title}
                </h3>
                <h4 className="text-base font-medium text-neutral-400">
                  {item.job}
                </h4>
              </div>
            </div>

            {/* Right side (content inside card) */}
            <div className="relative w-full pl-16 md:pl-6">
              {/* Mobile Header */}
              <div className="block md:hidden mb-3">
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={item.job}
                    className="w-8 h-8 rounded-md mb-2 object-contain bg-white p-1"
                  />
                )}
                <p className="text-sm text-neutral-400">{item.date}</p>
                <h3 className="text-lg font-semibold text-neutral-200">
                  {item.title}
                </h3>
                <h4 className="text-sm font-medium text-neutral-400">
                  {item.job}
                </h4>
              </div>

              {/* Card */}
              <div className="bg-neutral-900/40 border border-neutral-800 rounded-xl p-4 shadow-md shadow-black/20 hover:bg-neutral-900/60 transition-colors">
                <div className="space-y-3">
                  {item.contents.map((content, i) => (
                    <p
                      key={i}
                      className="text-base text-neutral-400 leading-relaxed hover:text-neutral-200 transition-colors"
                    >
                      {content}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Animated vertical line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] 
            bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
            from-transparent via-neutral-700 to-transparent
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] 
              bg-gradient-to-t from-purple-500 via-purple-400/50 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
