import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// If reportWebVitals exists in your project, you can import it; otherwise skip that import line.
try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (err) {
  // fallback for older React setup
  // eslint-disable-next-line no-console
  console.error(err);
}
