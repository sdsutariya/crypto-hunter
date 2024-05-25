import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import CryptoContext from './CryptoContext';
import 'react-alice-carousel/lib/alice-carousel.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot instead of ReactDOM.render
root.render(
    <CryptoContext>
      <App />
    </CryptoContext>
);
