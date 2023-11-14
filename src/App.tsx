import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Header'
import Container from "react-bootstrap/esm/Container"
import Home from "./views/Home"
import TaskDisplay from './views/TaskDisplay'

export default function App() {

  return (
    <BrowserRouter>
      <Container>
        <Navbar username = 'Emili'/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/tasks' element={<TaskDisplay/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}