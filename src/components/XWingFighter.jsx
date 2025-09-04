// XWingFighter.jsx
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function XWingFighter(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/x_-wing.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  // Positions
  const startPos = new THREE.Vector3(6, 4, -12); // far top-right
  const overshootPos = new THREE.Vector3(-0.8, 0.3, 0.6); // fly past
  const endPos = new THREE.Vector3(-1.5, 0.2, 0); // settle left near text

  // Scale
  const startScale = new THREE.Vector3(0.05, 0.05, 0.05);
  const endScale = new THREE.Vector3(0.7, 0.7, 0.7);

  let progress = 0;

  useFrame(() => {
    if (!group.current) return;

    // Flight progress (ease in-out)
    progress = Math.min(progress + 0.006, 1);

    // Smooth overshoot → final settle
    const t = progress < 0.8 ? progress / 0.8 : 1;
    const posTarget =
      progress < 0.8
        ? overshootPos.clone().lerp(endPos, t) // go through overshoot
        : endPos;

    // Lerp towards position
    group.current.position.lerp(posTarget, 0.04);

    // Scale up (zoom in)
    group.current.scale.lerp(endScale, 0.02);

    // Rotate to face slightly left (toward text)
    group.current.rotation.y = Math.PI * 0.85; // ~153° yaw

    // Add gentle banking roll while flying in
    group.current.rotation.z = Math.sin(progress * Math.PI * 2) * 0.1;
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[startPos.x, startPos.y, startPos.z]}
      scale={[startScale.x, startScale.y, startScale.z]}
    >
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.699}
        >
          <group name="Root">
            <group name="Plane" position={[0.312, -2.145, 0.464]}>
              <mesh
                geometry={nodes.Plane_0.geometry}
                material={materials["Material.001"]}
                castShadow
                receiveShadow
              />
            </group>
            <group
              name="Plane001"
              position={[0.312, -2.145, 0.464]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <mesh
                geometry={nodes.Plane001_0.geometry}
                material={materials["Material.001"]}
                castShadow
                receiveShadow
              />
            </group>
            <group
              name="Circle001"
              position={[0.312, -2.145, 0.464]}
              rotation={[Math.PI / 2, 0, 0.127]}
              scale={[0.159, 0.15, 0.15]}
            >
              <mesh
                geometry={nodes.Circle001_0.geometry}
                material={materials["Material.001"]}
                castShadow
                receiveShadow
              />
            </group>
            <group
              name="Circle"
              position={[0.312, -2.145, 0.464]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.072}
            >
              <mesh
                geometry={nodes.Circle_0.geometry}
                material={materials["Material.001"]}
                castShadow
                receiveShadow
              />
            </group>
            <group
              name="Circle002"
              position={[0.589, -2.157, 0.688]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.012}
            >
              <mesh
                geometry={nodes.Circle002_0.geometry}
                material={materials.BakedCycles}
                castShadow
                receiveShadow
              />
            </group>
            <group name="Cube" position={[0, -0.935, 0.461]} scale={0.274}>
              <mesh
                geometry={nodes.Cube_0.geometry}
                material={materials["Material.001"]}
                castShadow
                receiveShadow
              />
              <mesh
                geometry={nodes.Cube_1.geometry}
                material={materials.GLASS}
                castShadow
                receiveShadow
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/x_-wing.glb");
