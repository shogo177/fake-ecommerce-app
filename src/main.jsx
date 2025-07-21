// Main File: main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/cyberpunk.css';

// Override default Bootstrap text color for product details
const style = document.createElement('style');
style.innerHTML = `
  body {
    color: white !important;
  }
  .card-title, .card-text, .btn {
    color: white !important;
  }
`;
document.head.appendChild(style);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
