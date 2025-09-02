import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader = ({ onFinish }) => {
  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onFinish();
      },
    });

    tl.to(".rs-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".rs-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
    });
  });

  return (
    <div className="svg flex items-center justify-center fixed top-0 left-0 z-[1000] w-full h-screen overflow-hidden bg-[#000]">
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="rsMask">
            <rect width="100%" height="100%" fill="black" />
            <g className="rs-mask-group">
              <text
                x="50%"
                y="50%"
                fontSize="250"
                textAnchor="middle"
                fill="white"
                dominantBaseline="middle"
                fontFamily="Arial Black"
              >
                RS
              </text>
            </g>
          </mask>
        </defs>
        <image
          href="/assets/sky.jpg"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#rsMask)"
        />
      </svg>
    </div>
  );
};

export default Loader;
