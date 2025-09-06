import { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const ResumePreview = () => {
  const [lensPos, setLensPos] = useState({
    x: 0,
    y: 0,
    show: false,
    width: 0,
    height: 0,
  });

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setLensPos({ x, y, show: true, width, height });
  };

  const handleMouseLeave = () => setLensPos({ ...lensPos, show: false });

  return (
    <section id="resume" className="relative c-space section-spacing">
      {/* Section Heading */}
      <h2 className="text-heading mb-14">My Resume</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Resume Preview with Magnifier */}
        <div
          className="relative w-full max-w-sm md:max-w-md aspect-[683/884] 
             overflow-hidden rounded-2xl border border-lavender/30 
             shadow-[0_0_25px_-5px_#7a57db] cursor-crosshair mx-auto"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="./assets/docs/resume-preview.jpg"
            alt="Resume Preview"
            className="w-full h-full object-contain"
          />
          {lensPos.show && (
            <div
              className="absolute w-32 h-32 border-2 border-lavender rounded-full 
                 pointer-events-none shadow-[0_0_25px_-5px_#7a57db]"
              style={{
                top: lensPos.y - 64,
                left: lensPos.x - 64,
                backgroundImage: `url('./assets/docs/resume-preview.jpg')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: `${lensPos.width * 2}px ${
                  lensPos.height * 2
                }px`,
                backgroundPosition: `${-lensPos.x * 2 + 64}px ${
                  -lensPos.y * 2 + 64
                }px`,
              }}
            />
          )}
        </div>

        {/* Resume Highlights */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-lavender">
            Resume Highlights
          </h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-2 leading-relaxed">
              <span className="text-lavender mt-1">➤</span>
              <span>
                Frontend Development expertise with React.js & Tailwind CSS
              </span>
            </li>
            <li className="flex items-start gap-2 leading-relaxed">
              <span className="text-lavender mt-1">➤</span>
              <span>Proficient in Python, C++, Node.js, Firebase, MySQL</span>
            </li>
            <li className="flex items-start gap-2 leading-relaxed">
              <span className="text-lavender mt-1">➤</span>
              <span>Hands-on freelancing & project-based experience</span>
            </li>
            <li className="flex items-start gap-2 leading-relaxed">
              <span className="text-lavender mt-1">➤</span>
              <span>Passionate about modern, scalable web applications</span>
            </li>
          </ul>

          {/* Download Button */}
          <motion.a
            href="./assets/docs/Rahul_Sharma SDE.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-3 px-8 py-3 rounded-full border border-lavender text-lavender font-medium hover:bg-lavender hover:text-white transition-all w-fit mt-6"
          >
            <FaDownload className="text-lg" />
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ResumePreview;
