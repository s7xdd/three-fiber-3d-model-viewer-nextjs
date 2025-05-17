import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Environment, Center } from "@react-three/drei";
import Model from "./model";

export default function ThreeViewer({ modelPath }: { modelPath: string }) {
  const supportedExtensions = [".gltf", ".glb"];
  const extension = modelPath?.toLowerCase().match(/\.[0-9a-z]+$/i)?.[0];

  if (!extension || !supportedExtensions.includes(extension)) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="text-center">Unsupported file type</div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen relative">
      <Canvas shadows camera={{ position: [0, 0.6, 2.4], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight castShadow position={[5, 10, 5]} intensity={4} shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <Center>
          <Model modelPath={modelPath} position={[0, 0, 0]} />
          <Environment preset="city" />
          <ContactShadows opacity={0.5} blur={1.5} scale={10} />
        </Center>

        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
      <div className="absolute top-4 right-4 bg-gray-900 opacity-80 backdrop-blur-3xl text-white px-8 py-4 rounded-xl max-w-xl text-sm shadow-lg border border-gray-700">
        <h3 className="font-semibold text-lg mb-3 text-gray-100">Controls</h3>
        <ul className="list-none space-y-2">
          <li className="flex items-center">
            <span className="mr-2">🖱️</span> Left-click + drag: Rotate
          </li>
          <li className="flex items-center">
            <span className="mr-2">🖱️</span> Right-click + drag: Pan
          </li>
          <li className="flex items-center">
            <span className="mr-2">🖱️</span> Scroll: Zoom
          </li>
        </ul>
      </div>
    </div>
  );
}
