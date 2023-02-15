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
  
  <Canvas>
    <App />
  </Canvas>

  </>
);

reportWebVitals();
