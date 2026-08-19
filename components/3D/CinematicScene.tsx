"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
  MeshTransmissionMaterial,
  Icosahedron,
  Torus,
  Float,
  Sparkles,
  Environment,
  Stars,
  Instance,
  Instances
} from "@react-three/drei";
import { EffectComposer, Bloom, Vignette, Noise, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";
import { MotionValue } from "framer-motion";

export default function CinematicScene({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const shardsRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  // Generate random data for orbiting shards
  const shardsData = useMemo(() => {
    return Array.from({ length: 50 }).map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      ),
      rotation: new THREE.Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ),
      scale: 0.1 + Math.random() * 0.3,
      speed: 0.5 + Math.random() * 1.5,
      direction: new THREE.Vector3(
        (Math.random() - 0.5),
        (Math.random() - 0.5),
        (Math.random() - 0.5)
      ).normalize()
    }));
  }, []);

  useFrame((state, delta) => {
    const scroll = scrollYProgress.get(); // 0 to 1
    const easingScroll = scroll * scroll;

    // Move the entire group based on scroll
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        state.clock.elapsedTime * 0.1 + scroll * Math.PI * 2,
        0.1
      );
      groupRef.current.position.z = THREE.MathUtils.lerp(
        groupRef.current.position.z,
        easingScroll * 10,
        0.1
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        scroll * 2,
        0.1
      );
    }

    // Spin rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x -= delta * 0.2;
      ring1Ref.current.rotation.y += delta * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.4;
      ring2Ref.current.rotation.z += delta * 0.1;
    }

    // Core pulsing effect
    if (coreRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 1;
      coreRef.current.scale.set(pulse, pulse, pulse);
      coreRef.current.rotation.x += delta * 0.5;
      coreRef.current.rotation.y += delta * 0.5;
    }

    // Exploding shards effect based on scroll
    if (shardsRef.current) {
      shardsRef.current.children.forEach((shard, i) => {
        const data = shardsData[i];
        shard.rotation.x += delta * data.speed;
        shard.rotation.y += delta * data.speed;

        // Base position + explosion distance based on scroll
        const explosionRadius = scroll * 5;
        const targetPos = data.position.clone().add(data.direction.clone().multiplyScalar(explosionRadius));

        shard.position.lerp(targetPos, 0.1);
      });
    }

    // Mouse parallax
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, (state.pointer.x * viewport.width) / 15, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, (state.pointer.y * viewport.height) / 15, 0.05);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <color attach="background" args={["#030509"]} />
      <fog attach="fog" args={["#030509", 5, 30]} />

      <Environment preset="night" />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#00E5FF" />
      <directionalLight position={[-10, -10, -5]} intensity={2} color="#9D00FF" />

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={300} scale={20} size={3} speed={0.5} opacity={0.8} color="#00E5FF" />

      <group ref={groupRef}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>

          {/* Inner Pulsating Glowing Core */}
          <Icosahedron ref={coreRef} args={[1.2, 2]}>
            <meshStandardMaterial
              color="#00E5FF"
              emissive="#00E5FF"
              emissiveIntensity={5}
              toneMapped={false}
              wireframe
            />
          </Icosahedron>

          {/* Solid dark core center */}
          <Icosahedron args={[1.1, 3]}>
            <meshStandardMaterial
              color="#000000"
              roughness={0.1}
              metalness={1}
            />
          </Icosahedron>

          {/* Data Ring 1 */}
          <Torus ref={ring1Ref} args={[2.5, 0.02, 16, 100]}>
            <meshStandardMaterial color="#9D00FF" emissive="#9D00FF" emissiveIntensity={2} toneMapped={false} />
          </Torus>

          {/* Data Ring 2 */}
          <Torus ref={ring2Ref} args={[3.2, 0.01, 16, 100]}>
            <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={1.5} toneMapped={false} />
          </Torus>

          {/* Outer Glass Shield */}
          <Icosahedron args={[4, 1]}>
            <MeshTransmissionMaterial
              backside
              samples={4}
              thickness={2}
              chromaticAberration={0.5}
              anisotropy={0.3}
              distortion={0.8}
              distortionScale={0.5}
              temporalDistortion={0.2}
              color="#ffffff"
              transmission={0.95}
              roughness={0.05}
              ior={1.2}
            />
          </Icosahedron>

          {/* Exploding Shards */}
          <group ref={shardsRef}>
            {shardsData.map((data, i) => (
              <mesh key={i} scale={data.scale}>
                <octahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                  color={i % 2 === 0 ? "#00E5FF" : "#9D00FF"}
                  emissive={i % 2 === 0 ? "#00E5FF" : "#9D00FF"}
                  emissiveIntensity={3}
                  toneMapped={false}
                  wireframe
                />
              </mesh>
            ))}
          </group>

        </Float>
      </group>

      {/* Cinematic Post Processing */}
      <EffectComposer disableNormalPass>
        <Bloom
          luminanceThreshold={0.2}
          mipmapBlur
          intensity={1.5}
          radius={0.8}
        />
        <ChromaticAberration
          offset={new THREE.Vector2(0.002, 0.002)}
          blendFunction={BlendFunction.NORMAL}
        />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
        <Noise opacity={0.03} />
      </EffectComposer>
    </>
  );
}
