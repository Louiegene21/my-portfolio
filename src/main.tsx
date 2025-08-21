// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProviderWrapper from './theme/ThemeProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProviderWrapper>
      <App />
    </ThemeProviderWrapper>
  </React.StrictMode>
);
