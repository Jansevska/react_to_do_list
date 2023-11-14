import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Header'
import Container from "react-bootstrap/esm/Container"
import Home from "./views/Home"
import Tasklist from './components/Tasklist'
import Table from './components/Table'

export default function App() {

  return (
    <BrowserRouter>
      <Container data-bs-theme='secondary'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/tasks' element={<Tasklist/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}