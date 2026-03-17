import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/globals.css';

// v2.3.1 - Cache bust utility
// Clear any stale service workers that might cache old module paths
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(registration => {
      // Only unregister if it's not a Figma Make service worker
      if (!registration.active?.scriptURL.includes('figma.com')) {
        registration.unregister();
      }
    });
  });
}

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);