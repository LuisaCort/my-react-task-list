import "./Task.css"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

const Task = (props) => {
  const {id, onDelete, onEdit} = props
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors }
  } = useForm(
    {
      defaultValues: {
        state: props.state,
        name: props.name,
        desc: props.desc
      }
    }
  )
  const name = watch("name")
  const desc = watch("desc")
  const state = watch("state")
  useEffect(() => {
    (async () => {
      await trigger()
      Object.keys(errors).length === 0 && onEdit(id, name, desc, state)
    })()
  }, [name, desc, state])
  const handleDelete = () => onDelete(id)
  return(
    <form id="Task" onSubmit={handleSubmit(handleDelete)}>
      <input type="checkbox" {...register("state")}/>
      <div id="text_fields">
        {errors.name && <h2>{errors.name.message}</h2>}
        <input type="text" {...register("name", {
          disabled: state,
          required: "Nombre requerido",
          minLength: {
            value: 3,
            message: "Nombre mínimo 3 caracteres"
          }
        })}/>
        <textarea type="text" {...register("desc", {
          disabled: state
        })}/>
      </div>
      <button type="submit">🗑️</button>
    </form>
  )
}

export default Task