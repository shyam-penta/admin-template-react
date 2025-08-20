import { StrictMode } from 'react'
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'
// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

import './index.css'
import App from './App.tsx'
import { store } from "@store/index"

// Initializing tooltip
// import "@core/tooltip/index.ts"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
