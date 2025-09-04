// Hero.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { XWingFighter } from "../components/XWingFighter";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";

// Fly-in wrapper
function FlyInGroup({
  children,
  start = [10, 6, -20], // start top-right, far away
  end = [8, 0.5, 7], // ✅ shifted slightly lower & more right
  startScale = 0.05,
  endScale = 2.8, // ✅ much bigger
  yawFix = -0.35, // ✅ angled left toward HeroText
  bankAmount = 0.5,
  noseDown = 0.4, // ✅ tilt nose downward
  duration = 3.2,
}) {
  const ref = useRef();
  const tRef = useRef(0);

  const easeOut = (x) => 1 - Math.pow(1 - x, 3);

  useFrame((_, delta) => {
    if (!ref.current) return;

    tRef.current = Math.min(1, tRef.current + delta / duration);
    const t = easeOut(tRef.current);

    // interpolate position
    const x = start[0] + (end[0] - start[0]) * t;
    const y = start[1] + (end[1] - start[1]) * t;
    const z = start[2] + (end[2] - start[2]) * t;
    ref.current.position.set(x, y, z);

    // interpolate scale (zoom in)
    const s = startScale + (endScale - startScale) * t;
    ref.current.scale.set(s, s, s);

    // orientation (cinematic)
    ref.current.rotation.y = yawFix; // face slightly left
    ref.current.rotation.x = noseDown * t; // nose tilts more as it comes in
    ref.current.rotation.z = bankAmount * (1 - t) - 0.15; // left bank that eases out
  });

  return <group ref={ref}>{children}</group>;
}

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  const endPos = isMobile ? [3, -1, 0] : [4, -0.5, 0];
  const endScale = isMobile ? 2.0 : 2.8;

  return (
    <section
      id="home"
      className="hero flex items-center justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space"
    >
      <HeroText />
      <ParallaxBackground />

      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 8], fov: 50 }} dpr={[1, 2]} shadows>
          {/* Lights */}
          <ambientLight intensity={1.1} />
          <hemisphereLight intensity={0.6} />
          <directionalLight position={[6, 8, 5]} intensity={2.2} castShadow />
          <directionalLight position={[-6, 3, -5]} intensity={0.6} />

          {/* X-Wing cinematic fly-in */}
          <FlyInGroup
            start={[10, 6, -20]}
            end={endPos}
            startScale={0.05}
            endScale={endScale}
            yawFix={-0.35}
            bankAmount={0.45}
            noseDown={0.4}
            duration={3.2}
          >
            <XWingFighter />
          </FlyInGroup>

          <Rig />
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    const target = [state.mouse.x / 10, 1 + state.mouse.y / 12, 8];
    easing.damp3(state.camera.position, target, 0.5, delta);
  });
}

export default Hero;
