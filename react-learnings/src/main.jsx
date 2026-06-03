import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Task13 from './tasks/task-13.jsx'
import Task14 from './tasks/task-14.jsx'
import Task15 from "./tasks/task-15.jsx"
import Task16 from "./tasks/task-16.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/task-13" element={<Task13 />}></Route>
        <Route path="/task-14" element={<Task14 />} />
        <Route path="/task-15" element={<Task15 />} />
        <Route path="/task-16" element={<Task16 />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
