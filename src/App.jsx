import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

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
        <About />
        <Projects />
        <Experiences />
        {/* <Testimonial /> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
