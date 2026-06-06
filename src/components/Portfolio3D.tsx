"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PresentationControls, Html } from "@react-three/drei";
import * as THREE from "three";

export default function Portfolio3D({ projects }: { projects: any[] }) {
  return (
    <div className="w-full h-[600px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={true}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <Carousel projects={projects} />
        </PresentationControls>
      </Canvas>
    </div>
  );
}

function Carousel({ projects }: { projects: any[] }) {
  const radius = 5;
  const count = projects.length;

  return (
    <group position={[0, -0.5, 0]}>
      {projects.map((project, i) => {
        const angle = (i / count) * Math.PI * 2;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;

        return (
          <Card
            key={i}
            project={project}
            position={[x, 0, z]}
            rotation={[0, angle, 0]}
          />
        );
      })}
    </group>
  );
}

function Card({ project, position, rotation }: any) {
  const [hovered, hover] = useState(false);

  return (
    <group position={position} rotation={rotation}>
      <mesh
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <planeGeometry args={[2.5, 3.5]} />
        <meshStandardMaterial
          color={hovered ? "#00E5FF" : "#1E293B"}
          transparent
          opacity={0.8}
        />
      </mesh>
      <Html
        transform
        occlude
        position={[0, 0, 0.01]}
        style={{ width: "220px", height: "300px" }}
      >
        <div className="w-full h-full bg-[#0B192C]/90 backdrop-blur-md rounded-lg border border-[#00E5FF]/20 p-4 flex flex-col justify-between overflow-hidden shadow-[0_0_15px_rgba(0,229,255,0.2)]">
          <div>
            <div className="text-xs text-[#00E5FF] mb-2 font-mono uppercase">
              {project.category}
            </div>
            <h3 className="text-white font-bold text-lg leading-tight mb-2">
              {project.title}
            </h3>
            <p className="text-[#94A3B8] text-xs leading-relaxed line-clamp-4">
              {project.description}
            </p>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#0B192C] bg-[#00E5FF] px-3 py-1.5 rounded text-center font-bold hover:bg-white transition-colors"
          >
            Visit Project
          </a>
        </div>
      </Html>
    </group>
  );
}
