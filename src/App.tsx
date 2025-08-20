import './App.css'
import './assets/css/themes.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedLayout from './layouts/protected-layout'
import Dashboard from '@pages/protected/dashboard'
import { useEffect } from 'react'
import { Tooltip } from "bootstrap";

function App() {

  useEffect(() => {
    // Enable tooltips after component mounts
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wrapper */}
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
