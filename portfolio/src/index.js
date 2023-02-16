import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Canvas  } from '@react-three/fiber';
import './style.css'
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
  <Canvas


  camera={
    {
      
    fov:80,
    near: 0.1,
    far: 1000,
    position: [0, 0, 5]
    }
  }>
    <App />
  </Canvas>

  </>
);

reportWebVitals();
