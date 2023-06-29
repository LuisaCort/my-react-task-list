import "./Task.css"
import { useState, useEffect } from "react"

const Task = (props) => {
  const {id, onDelete, onEdit} = props
  const [input, setInput] = useState(props.desc)
  const [state, setState] = useState(props.state)
  const [height, setHeight] = useState("30px")
  const handleInput = item => setInput(item.target.value)
  const handleState = item => setState(item.target.checked)
  const handleDelete = () => onDelete(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => onEdit(id, input, state), [input, state])
  const handleFullSize = event => setHeight(event.currentTarget.scrollHeight+"px")
  const handleSmallSize = () => setHeight("30px")
  return(
    <div id="Task">
      <input type="checkbox" checked={state} onChange={handleState}/>
      <textarea 
        value={input} 
        onChange={handleInput} 
        disabled={state} 
        style={{height:height}}
        onFocus={handleFullSize} 
        onBlur={handleSmallSize}
      />
      <button onClick={handleDelete}>🗑️</button>
    </div>
  )
}

export default Task