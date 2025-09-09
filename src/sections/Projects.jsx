import { useEffect, useRef } from "react";
import { myProjects } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl";
import { motion } from "motion/react";

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const triggerRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // title reveal animation
    gsap.fromTo(
      titleRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Section entrance effect
    gsap.fromTo(
      triggerRef.current,
      {
        y: 100,
        rotationX: 20,
        opacity: 0,
      },
      {
        y: 0,
        rotationX: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Parallax effect for entire section
    gsap.fromTo(
      sectionRef.current,
      {
        backgroundPosition: "50% 0%",
      },
      {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Horizontal Scrolling
    // Create horizontal scrolling animation
    const horizontalScroll = gsap.to(".panel", {
      xPercent: -100 * (myProjects.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${horizontalRef.current.offsetWidth}`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (myProjects.length - 1),
          duration: { main: 0.2, max: 0.3 },
          delay: 0.1,
        },
        invalidateOnRefresh: true,
      },
    });
    // Image Animation
    // Animate each image panel
    const panels = gsap.utils.toArray(".panel");
    panels.forEach((panel, i) => {
      const image = panel.querySelector(".project-image");
      const imageTitle = panel.querySelector(".project-title");
      // create timeline for each panel
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          containerAnimation: horizontalScroll,
          start: "left right",
          end: "right left",
          scrub: true,
        },
      });
      // Image scale and opacity animation
      tl.fromTo(
        image,
        { scale: 0, rotation: -20 },
        { scale: 1, rotate: 1, duration: 0.5 }
      );
      // Title animation if it exists
      if (imageTitle) {
        tl.fromTo(imageTitle, { y: 30 }, { y: -100, duration: 0.3 }, 0.2);
      }
    });
  }, [myProjects.length]);
  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-screen max-w-[100vw] -ml-[calc((100vw-100%)/2)] py-20 overflow-hidden"
    >
      {/* Title with spacing */}
      <div className="w-full px-4 sm:px-10 lg:px-20 mb-6 relative z-10">
        <h2 ref={titleRef} className=" text-heading opacity-0 mb-4">
          My Projects
        </h2>
      </div>

      {/* Horizontal Scroll Section */}
      <div ref={triggerRef} className="overflow-hidden opacity-0">
        <div
          ref={horizontalRef}
          className="horizontal-section flex md:w-[400%] w-[420%]"
        >
          {myProjects.map((project) => (
            <div
              key={project.id}
              className="panel relative flex items-center justify-center "
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center">
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image max-w-full max-h-full rounded-2xl object-cover"
                  />

                  {/* Tech Stack */}
                  <div className="flex md:flex-col gap-4 justify-start items-start px-6 py-6 w-max -ml-6">
                    <h2 className="text-2xl font-bold text-white whitespace-nowrap mb-3">
                      Tech Stack
                    </h2>
                    {project.tags.map((tag, index) => (
                      <motion.div
                        key={tag.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        viewport={{ once: false, amount: 0.2 }} // fade out when leaving
                        className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#1a1d35] text-gray-200 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_12px_rgba(255,255,255,0.4)] w-auto"
                      >
                        <img
                          src={tag.path}
                          alt={tag.name}
                          className="w-7 h-7 flex-shrink-0"
                        />
                        <span className="text-sm font-medium whitespace-nowrap">
                          {tag.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <a href={project.href}>
                  <h2 className="project-title flex items-center gap-3 md:text-3xl text-sm md:font-bold text-gray-400 mt-6 z-50 text-nowrap hover:text-white transition-colors duration-300">
                    {project.title}
                    <SlShareAlt />
                  </h2>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
