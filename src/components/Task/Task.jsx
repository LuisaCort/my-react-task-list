import "./Task.css"
import { useState, useEffect } from "react"

const Task = (props) => {
  const {id, onDelete, onEdit} = props
  const [input, setInput] = useState(props.desc)
  const [state, setState] = useState(props.state)
  const handleInput = item => setInput(item.target.value)
  const handleState = item => setState(item.target.checked)
  const handleDelete = () => onDelete(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => onEdit(id, input, state), [input, state])
  return(
    <div id="Task">
      <input type="checkbox" checked={state} onChange={handleState}/>
      <input type="text" value={input} onChange={handleInput} disabled={state}/>
      <div id="ButtonsContainer">
        <button onClick={handleDelete}>🗑️</button>
      </div>
    </div>
  )
}

export default Task