"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Box } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({ position, color, speed = 1, distort = 0.3, scale = 1 }: {
    position: [number, number, number];
    color: string;
    speed?: number;
    distort?: number;
    scale?: number;
}) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={distort}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                    transparent
                    opacity={0.8}
                />
            </Sphere>
        </Float>
    );
}

function FloatingTorus({ position, color, speed = 1 }: {
    position: [number, number, number];
    color: string;
    speed?: number;
}) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.5 * speed;
            meshRef.current.rotation.z = state.clock.elapsedTime * 0.3 * speed;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
            <Torus ref={meshRef} args={[1, 0.3, 16, 100]} position={position} scale={0.8}>
                <meshStandardMaterial
                    color={color}
                    metalness={0.9}
                    roughness={0.1}
                    transparent
                    opacity={0.7}
                />
            </Torus>
        </Float>
    );
}

function FloatingCube({ position, color }: {
    position: [number, number, number];
    color: string;
}) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <Box ref={meshRef} args={[1, 1, 1]} position={position} scale={0.6}>
                <meshStandardMaterial
                    color={color}
                    metalness={0.8}
                    roughness={0.2}
                    transparent
                    opacity={0.6}
                    wireframe
                />
            </Box>
        </Float>
    );
}

function Particles() {
    const count = 100;
    const [positions, setPositions] = useState<Float32Array | null>(null);

    useEffect(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPositions(pos);
    }, []);

    const pointsRef = useRef<THREE.Points>(null);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
        }
    });

    const positionAttribute = useMemo(() => {
        if (!positions) return null;
        return new THREE.BufferAttribute(positions, 3);
    }, [positions]);

    if (!positionAttribute) return null;

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <primitive object={positionAttribute} attach="attributes-position" />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#FF6B6B"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                style={{ background: "transparent" }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -10]} color="#FFD700" intensity={0.5} />
                <pointLight position={[10, 10, 10]} color="#FF6B6B" intensity={0.5} />

                {/* Main floating shapes */}
                <FloatingShape position={[-3, 1, 0]} color="#FF6B6B" scale={1.2} distort={0.4} />
                <FloatingShape position={[3, -1, -2]} color="#FFD700" scale={0.8} speed={0.7} />
                <FloatingShape position={[0, 2, -3]} color="#00E5FF" scale={0.6} speed={1.2} />

                {/* Torus rings */}
                <FloatingTorus position={[-2, -2, -1]} color="#FF6B6B" speed={0.8} />
                <FloatingTorus position={[4, 1, -2]} color="#FFD700" speed={0.5} />

                {/* Wireframe cubes */}
                <FloatingCube position={[2, 2, -1]} color="#FF6B6B" />
                <FloatingCube position={[-4, 0, -2]} color="#FFD700" />

                {/* Particles */}
                <Particles />
            </Canvas>
        </div>
    );
}
