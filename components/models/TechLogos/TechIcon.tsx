'use client';

import { Environment, useGLTF, Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

interface TechIconProps {
    model : {
        name: string;
        modelPath: string;
        scale: number;
        rotation: [number,number,number];
    };
}

export default function TechIcon({model}:TechIconProps) {
    const scene = useGLTF(model.modelPath);


    return (
        <Canvas>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5,5,5]} intensity={1}/>
            <Environment preset="city"/>

            <OrbitControls enableZoom={false} enablePan={false} />

            <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
                <group scale={model.scale} rotation={model.rotation}>
                    <primitive object={scene.scene}/>
                </group>

            </Float>
        </Canvas>
    )
}