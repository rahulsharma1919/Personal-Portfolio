import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import ChatBot from "./components/ChatBot";
import GoToTopButton from "./components/GoToTop";
import CustomCursor from "./components/CustomCursor";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Refresh ScrollTrigger when page is fully loaded
    ScrollTrigger.refresh();
    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onFinish={() => setLoading(false)} />}
      </AnimatePresence>
      <div
        className={`container mx-auto max-w-7xl ${
          loading ? "pointer-events-none" : ""
        }`}
        aria-hidden={loading}
      >
        <Navbar />
        <Hero />
        <CustomCursor />
        <About />
        <Projects />
        <Experiences />
        <Contact />
        <Footer />
        <GoToTopButton />
        <ChatBot />
      </div>
    </>
  );
};

export default App;
