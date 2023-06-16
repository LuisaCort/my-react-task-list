import "./TaskList.css"
import Task from "../Task/Task"

const TaskList = () => {
  const task_count = 10
  const tasks = []
  for(let i = 0; i < task_count; i++){
    const task_description = `Numero de Tarea ${i+1}
    Lorem ipsum dolor sit amet, consectetur adipiscing 
    elit. Phasellus vitae nibh risus. Vestibulum sagittis 
    metus non urna fermentum, vitae tincidunt lectus 
    dapibus. Aliquam erat volutpat. Quisque semper nulla 
    vitae nisi iaculis eleifend.`
    tasks.push(<Task desc={task_description} />)
  }

  return(
    <div id="TaskList">
      <div id="InputContainer">
        <input type="text" placeholder="Nombre de la tarea" />
        <button>+</button>
      </div>
      <div id="TaskContainer">
        {tasks}
      </div>
    </div>
  )
}

export default TaskList