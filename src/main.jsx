import ReactDOM from 'react-dom/client'
import "./main.css"

import Header from './components/Header/Header.jsx'
import TaskList from './components/TaskList/TaskList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div id="main">
    <Header />
    <TaskList />
  </div>
)
