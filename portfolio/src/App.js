import React from "react";
import "./App.css";

function App() {
  return (
    <mesh scale={1.5} position-x={2}>
      <sphereGeometry args={[1.5, 50, 50]} />
      <meshBasicMaterial args={[{ color: "purple", wireframe: true }]} />
    </mesh>
  );
}

export default App;
