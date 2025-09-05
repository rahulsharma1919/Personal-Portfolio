import { motion } from "motion/react";
import { FiExternalLink } from "react-icons/fi";

const ProjectDetails = ({
  title,
  description,
  subDescription = [],
  image,
  tags = [],
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-auto backdrop-blur-sm bg-black/45 p-4">
      <motion.div
        className="relative w-full max-w-lg h-[600px] rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] shadow-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 hover:bg-black/50 transition cursor-pointer"
        >
          <img src="assets/close.svg" className="w-5 h-5" alt="close" />
        </button>

        {/* Project Image */}
        <div className="w-full h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Main Content */}
        <div className="p-5 flex flex-col h-[calc(100%-14rem)]">
          <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-neutral-400 mb-3">{description}</p>

          {/* Scrollable subDescription points */}
          <ul className="flex-1 overflow-y-auto pr-2 space-y-2 custom-scroll">
            {subDescription.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-lavender flex-shrink-0"></span>
                <span className="text-sm text-neutral-300 leading-normal">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-2 items-center flex-wrap">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="w-9 h-9 rounded-md"
                />
              ))}
            </div>

            {/* Modern Button with center text → shift + arrow on hover */}
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center justify-center px-6 py-2 text-sm font-medium rounded-3xl border text-purple-400 border-lavender overflow-hidden group cursor-pointer min-w-[140px]"
            >
              {/* Text (center initially, shifts left on hover) */}
              <span className="relative z-10 flex items-center transition-all duration-300 group-hover:-translate-x-2 group-hover:text-white">
                View Project
              </span>

              {/* Arrow (hidden initially, slides in on hover) */}
              <FiExternalLink className="w-4 h-4 absolute right-3 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-white z-10" />

              {/* Background fill animation */}
              <span className="absolute inset-0 bg-lavender scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
            </a>
          </div>
        </div>

        {/* Scrollbar styles */}
        <style jsx>{`
          .custom-scroll::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scroll::-webkit-scrollbar-thumb {
            background: var(--color-lavender);
            border-radius: 999px;
          }
        `}</style>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
