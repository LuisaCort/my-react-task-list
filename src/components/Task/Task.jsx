import "./Task.css"

const Task = (props) => {
  const {desc} = props
  return(
    <div id="Task">
      <input type="checkbox" />
      <p>{desc}</p>
      <div id="ButtonsContainer">
        <button>✍️</button>
        <button>🗑️</button>
      </div>
    </div>
  )
}

export default Task