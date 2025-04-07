import React from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Shape = () => {
  return (
    <>
      <Sphere args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="hotpink"
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>
      <ambientLight intensity={0.5} />
      <directionalLight color="" position={[1, 2, 3]} />
    </>
  );
};

export default Shape;
