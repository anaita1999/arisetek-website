"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles, Environment, Stars } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import { MotionValue } from "framer-motion";

export default function CinematicScene({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  // Generate particles for a massive Global Data Sphere
  const particlesCount = 3000;
  const sphereRadius = 4;

  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      // Golden spiral method for even distribution on a sphere
      const phi = Math.acos(1 - 2 * (i + 0.5) / particlesCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      pos[i * 3] = sphereRadius * Math.cos(theta) * Math.sin(phi);
      pos[i * 3 + 1] = sphereRadius * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = sphereRadius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    const scroll = scrollYProgress.get(); // 0 to 1

    // Rotate the globe continuously, and speed it up during scroll
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.1 + (scroll * delta * 0.5);
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }

    // Move the entire group based on scroll (pulling it closer)
    if (groupRef.current) {
      groupRef.current.position.z = THREE.MathUtils.lerp(
        groupRef.current.position.z,
        scroll * 8, // Pulls the globe closer as you scroll down
        0.1
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        scroll * -2, // Pushes it down slightly
        0.1
      );
    }

    // Mouse parallax
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, (state.pointer.x * viewport.width) / 20, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, (state.pointer.y * viewport.height) / 20, 0.05);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <color attach="background" args={["#030509"]} />
      <fog attach="fog" args={["#030509", 8, 30]} />

      <Environment preset="night" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#00E5FF" />
      <directionalLight position={[-10, -10, -5]} intensity={2} color="#9D00FF" />

      {/* Background space */}
      <Stars radius={100} depth={50} count={2000} factor={3} saturation={0} fade speed={1} />
      <Sparkles count={200} scale={25} size={2} speed={0.2} opacity={0.5} color="#00E5FF" />

      <group ref={groupRef}>
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          
          {/* Main Particle Globe */}
          <points ref={pointsRef}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={positions.length / 3}
                array={positions}
                itemSize={3}
              />
            </bufferGeometry>
            <pointsMaterial
              size={0.05}
              color="#00E5FF"
              transparent
              opacity={0.8}
              sizeAttenuation
              blending={THREE.AdditiveBlending}
            />
          </points>

          {/* Inner dark core to block stars from showing through the back of the globe */}
          <mesh>
            <sphereGeometry args={[3.8, 32, 32]} />
            <meshBasicMaterial color="#000000" />
          </mesh>

          {/* Glowing Atmosphere */}
          <mesh>
            <sphereGeometry args={[4.2, 32, 32]} />
            <meshBasicMaterial 
              color="#9D00FF" 
              transparent 
              opacity={0.05} 
              blending={THREE.AdditiveBlending} 
              side={THREE.BackSide}
            />
          </mesh>

        </Float>
      </group>

      {/* Highly Optimized Post Processing */}
      <EffectComposer enableNormalPass={false} multisampling={0}>
        <Bloom 
          luminanceThreshold={0.2} 
          mipmapBlur 
          intensity={1.5} 
          radius={0.8}
        />
        <Vignette eskil={false} offset={0.1} darkness={1.2} />
      </EffectComposer>
    </>
  );
}
