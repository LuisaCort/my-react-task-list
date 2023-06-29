import "./TaskList.css"
import Task from "../Task/Task"
import { useState, useEffect } from "react"

const TaskList = props => {
  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState(props.tasks_list)
  const handleInput = item => setInput(item.target.value)
  const handleDelete = id => setTasks(tasks.filter(element => element.id !== id))
  const handleAdd = e => {
    e.preventDefault()
    let id = Math.max.apply(null, tasks.map(element => element.id))+1
    id = id === -Infinity ? 0 : id
    setTasks([...tasks, {
      desc: input,
      state: false,
      id: id
    }])
    setInput("")
  }
  const handleEdit = (id, desc, state) => setTasks(tasks.map(element => element.id !== id ? element : {
    desc: desc,
    state: state,
    id: id
  }))
  let components = []
  for(let i = 0; i < tasks.length; i++) components.push(<Task key={tasks[i].id} 
    id={tasks[i].id} 
    desc={tasks[i].desc} 
    state={tasks[i].state} 
    onDelete={handleDelete}
    onEdit={handleEdit}
  />)  
  useEffect(() => localStorage.setItem("tasks", JSON.stringify(tasks)), [tasks])
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