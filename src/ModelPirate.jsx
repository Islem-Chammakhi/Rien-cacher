import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


// Custom component to load and display the GLTF model
function Model() {
  const { scene } = useGLTF('/assets/andromeda_ketos_gltf/scene.gltf'); // Load the GLTF model
  const modelRef = useRef(); // Create a reference to the model

  // Animate the model with continuous rotation
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Rotate along the Y-axis
      modelRef.current.rotation.x = Math.PI; // Rotate 180 degrees along the X-axis
    }
  });

  return <primitive ref={modelRef} object={scene} scale={[5, 5, 5]} />; // Smaller scale
}

function ModelPirate() {
  return (
    <div >
      

      {/* 3D Model Section */}
      
        <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
          {/* Lights */}
          <ambientLight intensity={7} />
          <directionalLight position={[0, 0, 5]} intensity={1} />

          {/* Model */}
          <Model />

          {/* Controls to rotate and zoom */}
          <OrbitControls />
        </Canvas>
      
    </div>
  );
}

export default ModelPirate;
