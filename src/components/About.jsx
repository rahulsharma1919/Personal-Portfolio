import aboutImg from "../assets/about me.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
// import resume from '.../public/Rahul_Sharma_SDE.pdf'

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="w-1/2 rounded-2xl"
              src={aboutImg}
              alt="About Rahul"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start flex-col">
            <p className="my-2 max-w-xl py-6 text-justify">{ABOUT_TEXT}</p>
            <div className="w-36 h-11">
              <a
                href="/Rahul_Sharma_SDE.pdf"
                target="blank"
                className="rounded bg-gray-900 px-4 py-3 text-[15px] font-medium text-purple-500"
                rel="noopener noreferer"
              >
                Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
