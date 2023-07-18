import "./App.css"
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu/Menu'

const Home = lazy(() => import('./pages/Home/Home'))
const Tasks = lazy(() => import('./pages/Tasks/Tareas'))
const About = lazy(() => import('./pages/About/SobreNosotros'))

const Directory = () => {
  return(
    <Routes>
      <Route path="/" element={
        <Suspense>
          <Home />
        </Suspense>} 
      />
      <Route path="/tasks" element={
        <Suspense>
          <Tasks />
        </Suspense>}
      />
      <Route path="/about" element={
        <Suspense>
          <About />
        </Suspense>}
      />
    </Routes>
  )
}

const App = () => {
  return(
    <div id="app">
      <Router>
        <Menu />
        <Directory />
      </Router>
    </div>
  )
}

export default App;