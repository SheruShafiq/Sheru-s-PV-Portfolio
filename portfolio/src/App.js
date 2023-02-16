import React from "react";
import "./App.css";
import { useThree, extend, useFrame } from '@react-three/fiber'
import { useRef } from "react";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Object from "./Object.js";
extend({ OrbitControls })


function App() {

  const cubeRef = useRef();
  const { camera, gl } = useThree()

  useFrame(({ clock }) => {
   cubeRef.current.rotation.y = clock.getElapsedTime();
  });

  return (
    <>
     <orbitControls args={ [ camera, gl.domElement ] } />
  <directionalLight position={[0, 1, 0]} intensity={2} />   
<ambientLight intensity={0.2} />


      {/* The purple box on the right */}
      <mesh ref={cubeRef} scale={1.5} position-x={2} rotation-y={Math.PI * 0.20}>
        <boxGeometry scale={1.5} />
        <meshStandardMaterial args={[{ color: "purple" }]} />
      </mesh>
      {/* The orange wireframe sphere on the left */}
      <mesh scale={1} position-x={-2}>
        <sphereGeometry args={[1, 50, 50]} />
        <meshStandardMaterial args={[{ color: "orange", wireframe: false }]} />
      </mesh>

<Object />

      {/* The plane underneath them */}
      <mesh rotation-x={- Math.PI * 0.4} scale={[10, 5, 2]} position-y={-1}>
        <planeGeometry />
        <meshStandardMaterial args={[{ color: "green" }]} />
      </mesh>
    </>
  )
}

export default App;
