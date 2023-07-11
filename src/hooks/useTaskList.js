import { useState, useEffect } from "react"

const getTask = () => {
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
  return tasks_obj
}

export const useTaskList = () => {
  const [tasks, setTasks] = useState([])
  useEffect(() => setTasks(getTask()), [])
  const addTask = input => {
    let id = Math.max.apply(null, [0, tasks.map(element => element.id)])+1
    // id = id === -Infinity ? 0 : id
    setTasks([...tasks, {
      desc: input,
      state: false,
      id: id
    }])
  }
  const deleteTask = id => setTasks(tasks.filter(element => element.id !== id))
  const updateTask = (id, desc, state) => setTasks(tasks.map(element => element.id !== id ? element : {
    desc: desc,
    state: state,
    id: id
  }))
  useEffect(() => localStorage.setItem("tasks", JSON.stringify(tasks)), [tasks])
  return [tasks, addTask, deleteTask, updateTask]
}