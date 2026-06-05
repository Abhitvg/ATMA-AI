"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function generatePositions(count: number) {
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    pos[i] = (Math.random() - 0.5) * 15;
  }
  return pos;
}

function NeuralParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const particleCount = 150;
  const maxDistance = 3.5;

  // Generate random positions
  const positions = useMemo(() => generatePositions(particleCount), [particleCount]);

  // Animation logic
  useFrame((state) => {
    if (pointsRef.current && linesRef.current) {
      const time = state.clock.getElapsedTime() * 0.1;
      
      pointsRef.current.rotation.y = time;
      pointsRef.current.rotation.x = time * 0.5;

      linesRef.current.rotation.y = time;
      linesRef.current.rotation.x = time * 0.5;
    }
  });

  // Calculate lines between close particles
  const [linePositions, lineOpacities] = useMemo(() => {
    const lines = [];
    const opacities = [];
    const vector1 = new THREE.Vector3();
    const vector2 = new THREE.Vector3();

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        vector1.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
        vector2.set(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
        const dist = vector1.distanceTo(vector2);

        if (dist < maxDistance) {
          lines.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );
          opacities.push(1 - dist / maxDistance, 1 - dist / maxDistance);
        }
      }
    }
    return [new Float32Array(lines), new Float32Array(opacities)];
  }, [positions, maxDistance, particleCount]);

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={positions.length / 3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#00E5FF"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
            count={linePositions.length / 3}
          />
          <bufferAttribute
            attach="attributes-opacity"
            args={[lineOpacities, 1]}
            count={lineOpacities.length}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#CCFF00" transparent opacity={0.15} vertexColors={false} />
      </lineSegments>
    </group>
  );
}

export function NetworkBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <fog attach="fog" args={["#0B192C", 5, 15]} />
        <ambientLight intensity={0.5} />
        <NeuralParticles />
      </Canvas>
    </div>
  );
}
