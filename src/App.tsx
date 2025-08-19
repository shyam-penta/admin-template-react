import './App.css'
import './assets/css/themes.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedLayout from './layouts/protected-layout'
import Dashboard from '@pages/protected/dashboard'

function App() {

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
