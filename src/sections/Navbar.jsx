import React, { useEffect, useRef, useState } from "react";
import { GoDownload } from "react-icons/go";
import { FiMenu, FiX } from "react-icons/fi";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import Button from "../components/Button";

const navItems = ["Home", "About", "Projects", "Experience", "Contact"];

const Navbar = () => {
  const navContainerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { y: currentScrollY } = useWindowScroll();

  // Scroll hide/show logic
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  // GSAP animation for navbar visibility
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  // GSAP animation for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.fromTo(
        ".mobile-nav-link",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, delay: 0.2, duration: 0.4 }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [isMenuOpen]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo + Download CV */}
          <div className="flex items-center gap-7">
            <a href="/">
              <img src="/assets/logos/logo.png" alt="logo" className="w-10" />
            </a>
            {/* Desktop Download Button */}
            <a
              href="./assets/docs/Rahul_Sharma SDE.pdf"
              download="Rahul_Sharma SDE.pdf"
              className="hidden md:block"
            >
              <Button
                id="download-cv-button"
                containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1 hover-animation"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-3xl"
              onClick={() => setIsMenuOpen(true)}
            >
              <FiMenu />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Full-Screen Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-screen w-screen bg-black z-60 flex flex-col items-center justify-center gap-8 opacity-0 translate-x-full"
      >
        {/* Close Button INSIDE menu */}
        <button
          className="absolute top-6 right-6 text-3xl"
          onClick={() => setIsMenuOpen(false)}
        >
          <FiX />
        </button>

        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="mobile-nav-link text-2xl font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </a>
        ))}

        {/* Mobile Download Button */}
        <a
          href="./assets/docs/Rahul_Sharma SDE.pdf"
          download="Rahul_Sharma SDE.pdf"
          className="block md:hidden"
        >
          <button
            id="download-cv-button-mobile"
            className="group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black bg-blue-50 flex items-center justify-center gap-1 hover-animation"
          >
            <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
              Download CV
            </span>
            <GoDownload />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
