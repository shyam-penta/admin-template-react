import { StrictMode } from 'react'
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'
// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import './index.css'
import App from './App.tsx'
import { store } from "@store/index"
import TopProgressBar from '@components/top-progress-bar.tsx';

// Initializing tooltip
// import "@core/tooltip/index.ts"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <TopProgressBar />
      <App />
    </Provider>
  </StrictMode>,
)
