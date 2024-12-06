import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Model() {
  const { scene } = useGLTF('/assets/mario_question_block/scene.gltf');
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
      modelRef.current.rotation.x += 0.005;
    }
  });

  return (
    <primitive 
      ref={modelRef} 
      object={scene} 
      scale={[8, 8, 8]}  // Agrandir le modèle
      position={[-10, 0, 0]}  // Positionner à gauche
    />
  );
}

export default Model;
