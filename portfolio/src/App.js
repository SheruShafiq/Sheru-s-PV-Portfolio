import React from "react";
import "./App.css";
import { MeshReflectorMaterial, Float, Text, Html, OrbitControls, TransformControls, PivotControls } from "@react-three/drei";
import { useRef } from "react";
import { Perf } from "r3f-perf";

function App() {

const refC = useRef()
const refS = useRef()

  return (
    <>
    <Perf />
     <OrbitControls makeDefault/>
  <directionalLight position={[0, 1, 0]} intensity={2} />   
<ambientLight intensity={0.2} />


      {/* The purple box on the right*/}
      <mesh scale={1.5} ref={refC} position-x={2} rotation-y={Math.PI * 0.20}>
        <boxGeometry scale={1.5} />
        <meshStandardMaterial args={[{ color: "cyan" }]} />
      </mesh>
      <TransformControls object={refC} />



      {/* The orange sphere on the left*/}
      <PivotControls anchor={[0,0,0]} scale={2} depthTest={false}>
      <mesh scale={1} ref={refS} position-x={-2} >
        <sphereGeometry args={[1, 50, 50]} />
        <meshStandardMaterial args={[{ color: "orange", wireframe: false }]} />
        <Html
          position={ [ 0, 1, 0 ] }
          wrapperClass="SBall"
          center
          distanceFactor={ 8 }
        >BALL</Html>
      </mesh>
      </PivotControls>


      {/* The plane underneath them */}
      <mesh rotation-x={- Math.PI * 0.4} scale={[10, 5, 2]} position-y={-1}>
        <planeGeometry />
       <MeshReflectorMaterial resolution={1060} mirror={0.5} color={"purple"} mixContrast={0.7}  mixBlur={10}/>
      </mesh>

      {/* The floating text */}
      <Float
  speed={4} // Animation speed, defaults to 1
  rotationIntensity={5} // XYZ rotation intensity, defaults to 1
  floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
  floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
>
      <Text position={[0, 2, 0]} font="./Cyberpunk.ttf" color={"red"} letterSpacing={-0.1}>Sheru</Text>
      </Float>
    </>
  )
}

export default App;
