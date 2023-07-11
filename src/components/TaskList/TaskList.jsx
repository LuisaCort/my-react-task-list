import "./TaskList.css"
import Task from "../Task/Task"
import { useState } from "react"
import { useTaskList } from "../../hooks/useTaskList"

const TaskList = () => {
  const [input, setInput] = useState("")
  const handleInput = item => setInput(item.target.value)
  const [tasks, addTask, deleteTask, editTask] = useTaskList()
  let components = []
  for(let i = 0; i < tasks.length; i++) components.push(
    <Task 
      key={tasks[i].id} 
      id={tasks[i].id} 
      desc={tasks[i].desc} 
      state={tasks[i].state} 
      onDelete={deleteTask}
      onEdit={editTask}
  />)
  const handleAdd = event => {
    event.preventDefault()
    addTask(input)
    setInput("")
  }
  return(
    <div id="TaskList">
      <form id="InputContainer" onSubmit={handleAdd}>
        <input type="text" placeholder="Nombre de la tarea" value={input} onChange={handleInput} required minLength={3}/>
        <button type="submit">+</button>
      </form>
      <div id="TaskContainer">
        {components}
      </div>
    </div>
  )
}

export default TaskList