import React from "react";
import "./App.css";
import { OrbitControls, TransformControls, PivotControls } from "@react-three/drei";
import { useRef } from "react";


function App() {

const refC = useRef()

  return (
    <>
     <OrbitControls makeDefault/>
  <directionalLight position={[0, 1, 0]} intensity={2} />   
<ambientLight intensity={0.2} />


      {/* The purple box on the right */}
      <mesh scale={1.5} ref={refC} position-x={2} rotation-y={Math.PI * 0.20}>
        <boxGeometry scale={1.5} />
        <meshStandardMaterial args={[{ color: "red" }]} />
      </mesh>
      <TransformControls object={refC} />

      {/* The orange wireframe sphere on the left */}
      <mesh scale={1}  position-x={-2} >
        <sphereGeometry args={[1, 50, 50]} />
        <meshStandardMaterial args={[{ color: "orange", wireframe: false }]} />
      </mesh>
      


      {/* The plane underneath them */}
      <mesh rotation-x={- Math.PI * 0.4} scale={[10, 5, 2]} position-y={-1}>
        <planeGeometry />
        <meshStandardMaterial args={[{ color: "green" }]} />
      </mesh>
    </>
  )
}

export default App;
