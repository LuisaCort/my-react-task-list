import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"

import Menu from './components/Menu'

const Home = lazy(() => import('./pages/Home'))
const Tasks = lazy(() => import('./components/TaskList'))
const About = lazy(() => import('./pages/SobreNosotros'))

const Directory = () => {
  return(
    <Routes>
      <Route path="/" element={<Suspense><Home /></Suspense>}/>
      <Route path="/tasks" element={<Suspense><Tasks /></Suspense>}/>
      <Route path="/about" element={<Suspense><About /></Suspense>}/>
    </Routes>
  )
}

const App = () => {
  return(
    <ChakraProvider>
      <Router>
        <Menu />
        <Directory />
      </Router>
    </ChakraProvider>
  )
}

export default App;