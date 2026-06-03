import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>React Learning Tasks</h1>
      <ul style={{ listStyle: 'none' }}>
        <li style={{ margin: '12px 0' }}>
          <Link to="/task-13" className="task-link">Task 13: Rendering a list of button</Link>
        </li>
        <li style={{ margin: '12px 0' }}>
          <Link to="/task-14" className="task-link">Task 14:Button click function</Link>
        </li>
        <li style={{ margin: '12px 0' }}>
          <Link to="/task-15" className="task-link">Task 15: Component </Link>
        </li>
        <li style={{ margin: '12px 0' }}>
          <Link to="/task-16" className="task-link">Task 16: User Form</Link>
        </li>
      </ul>
    </div>
  )
}

export default App
