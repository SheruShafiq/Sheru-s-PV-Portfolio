import React from "react";
import "./App.css";
import { SoftShadows, AccumulativeShadows, BakeShadows, MeshReflectorMaterial, Float, Text, Html, OrbitControls, TransformControls, PivotControls, RandomizedLight } from "@react-three/drei";
import { useRef } from "react";
import { Perf } from "r3f-perf";
import {useControls} from 'leva';



function App() {

const refC = useRef()
const refS = useRef()
const controls = useControls({
  position:
  {
      value: - 2,
      min: - 4,
      max: 4,
      step: 0.01
  }
})


  return (
    <>
  
   
    
   
     
    <BakeShadows />
    <Perf  position="top-left" />
     <OrbitControls makeDefault/>
  <directionalLight 
  castShadow
  position={[3, 4, 0]}
  intensity={2}
  // shadow-mapSize={[2048, 2048]}
  // shadow-camera-near={1}
  // shadow-camera-far={10}
  // shadow-camera-top={7}
  // shadow-camera-bottom={-7}
  // shadow-camera-left={-7}
  // shadow-camera-right={7}
   />   
  <AccumulativeShadows
    position={ [ 0, - 0.99, 0 ] }
    scale={ 10 }
    color="#316d39"
    opacity={ 0.8 }
    frames={ Infinity }
    temporal
    blend={ 200 }
>
    <RandomizedLight
        amount={ 8 }
        radius={ 1 }
        ambient={ 0.5 }
        intensity={ 1 }
        position={ [ 1, 2, 3 ] }
        bias={ 0.001 }
    />
</AccumulativeShadows>
<ambientLight intensity={0.2} />


      {/* The purple box on the right*/}
      <mesh scale={1.5} castShadow ref={refC} position-x={2}  rotation-y={Math.PI * 0.20}>
        <boxGeometry scale={1.5} />
        <meshStandardMaterial args={[{ color: "cyan" }]} />
      </mesh>
      {/* <TransformControls object={refC} /> */}



      {/* The orange sphere on the left*/}
      {/* <PivotControls anchor={[0,0,0]} scale={2} depthTest={false}> */}
      <mesh scale={1} castShadow ref={refS} position-x={-2} position-y={0.25} >
        <sphereGeometry  args={[1, 50, 50]} />
        <meshStandardMaterial args={[{ color: "orange", wireframe: false }]} />
        {/* <Html
          position={ [ 0, 1, 0 ] }
          wrapperClass="SBall"
          center
          distanceFactor={ 8 }
        >BALL</Html> */}
      </mesh>
      {/* </PivotControls> */}


      {/* The plane underneath them */}
      <mesh rotation-x={- Math.PI * 0.5} scale={[10, 10, 2]} position-y={-1} >
        <planeGeometry />
       <meshStandardMaterial args={[{ color: "brown", wireframe: false }]} />
      </mesh>

      {/* The floating text */}
      {/* <Float
  speed={4} // Animation speed, defaults to 1
  rotationIntensity={5} // XYZ rotation intensity, defaults to 1
  floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
  floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
>
      <Text position={[0, 2, 0]} font="./Cyberpunk.ttf" color={"red"} letterSpacing={-0.1}>Sheru</Text>
      </Float> */}
    </>
  )
}

export default App;
