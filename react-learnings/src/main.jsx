import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Task13 from './tasks/task-13.jsx'
import Task14 from './tasks/task-14.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/task-13" element={<Task13 />}></Route>
        <Route path="/task-14" element={<Task14 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
