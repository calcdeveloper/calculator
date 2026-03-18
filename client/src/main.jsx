import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/tailwind.css'; // Connects our Tailwind styles!
import { HelmetProvider } from 'react-helmet-async'; // NEW: SEO Engine

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);