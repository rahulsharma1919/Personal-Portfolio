import { useState, useEffect } from "react";
import { ChevronsUp } from "lucide-react";

export default function GoToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-6 p-3 rounded-full shadow-lg transition-all duration-500 ease-in-out 
        bg-gray-800 text-white hover:bg-gray-900 hover:scale-110 cursor-pointer ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
    >
      <ChevronsUp className="w-5 h-5" />
    </button>
  );
}
