import { Link } from 'react-router-dom'
import './Menu.css'

export default function Menu() {
  return(
    <nav>
      <Link to="/">Home</Link>
      <Link to="/tasks">Tareas</Link>
      <Link to="/about">Sobre Nosotros</Link>
    </nav>
  )
}