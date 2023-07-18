import "./TaskList.css"
import Task from "../Task/Task"
import {useTaskList} from "../../hooks/useTaskList"
import {useForm} from "react-hook-form"

const TaskList = () => {

  const [tasks, addTask, deleteTask, editTask] = useTaskList()

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm()

  const handleAdd = data => {
    addTask(data)
    reset()
  }


  let components = []
  for(let i = 0; i < tasks.length; i++) components.push(
    <Task 
      key={tasks[i].id} 
      id={tasks[i].id} 
      name={tasks[i].name}
      desc={tasks[i].desc} 
      state={tasks[i].state} 
      onDelete={deleteTask}
      onEdit={editTask}
  />)
  return(
    <div id="TaskList">

      <form id="InputContainer" onSubmit={handleSubmit(handleAdd)}>
        <h2>{errors.name?.message}</h2>
        <input type="text" placeholder="Nombre"
          {...register("name", {
            required: "Nombre requerido",
            minLength: {
              value: 3,
              message: "Nombre mínimo 3 caracteres"
            }
          })}
        />
        <input type="text" placeholder="Descripción"
          {...register("desc")}
        />
        <button type="submit">+</button>
      </form>

      <div id="TaskContainer">
        {components}
      </div>
    </div>
  )
}

export default TaskList