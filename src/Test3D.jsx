import React from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Test3D = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Canvas>
        <mesh>
          <Sphere args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
              color="hotpink"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
          <ambientLight intensity={1} />
          <directionalLight color="" position={[1, 2, 3]} />
          {/* <OrbitControls enableZoom={false} /> */}
        </mesh>
      </Canvas>
    </section>
  );
};

export default Test3D;
