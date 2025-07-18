import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// index.js or main.jsx
// import "./index.css";

// index.js (Entry Point)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);