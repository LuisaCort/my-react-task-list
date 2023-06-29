import Header from './components/Header/Header.jsx'
import TaskList from './components/TaskList/TaskList'
import "./App.css"

const App = () => {
  let tasks_obj = localStorage.getItem("tasks")
  if(!tasks_obj){
    tasks_obj = [{
      desc: "No hay tareas previas, puede eliminar estas tareas",
      state: false,
      id: 0
    }, {
      desc: "Luisa cortes",
      state: true,
      id: 1
    }]
    localStorage.setItem("tasks", JSON.stringify(tasks_obj))
  }
  else tasks_obj = JSON.parse(tasks_obj)
  return(
    <div id="app">
      <Header />
      <TaskList tasks_list={tasks_obj}/>
    </div>
  )
}

export default App;