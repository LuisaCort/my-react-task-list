import { useState, useEffect } from "react"

const getTask = () => {
  let tasks_obj = localStorage.getItem("tasks")
  if(!tasks_obj){
    tasks_obj = [{
      name: "Bienvenido",
      desc: "No hay tareas previas, puede eliminar estas tareas",
      state: false,
      id: 0
    }, {
      name: "Tarea 1",
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
  useEffect(() => localStorage.setItem("tasks", JSON.stringify(tasks)), [tasks])
  const addTask = data => {
    let id = Math.max.apply(null, [0, ...tasks.map(element => element.id)])+1
    setTasks([...tasks, {
      name: data.name,
      desc: data.desc,
      state: false,
      id: id
    }])
  }
  const deleteTask = id => setTasks(tasks.filter(element => element.id !== id))
  const updateTask = (id, name, desc, state) => setTasks(tasks.map(element => element.id !== id ? element : {
    name: name,
    desc: desc,
    state: state,
    id: id
  }))
  return [tasks, addTask, deleteTask, updateTask]
}