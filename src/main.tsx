import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux';
import { store } from "@store/index"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
