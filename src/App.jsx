import Header from './components/Header/Header.jsx'
import TaskList from './components/TaskList/TaskList'
import "./App.css"

const App = () => {
  return(
    <div id="app">
      <Header />
      <TaskList/>
    </div>
  )
}

export default App;