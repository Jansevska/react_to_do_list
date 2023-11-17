import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Header'
import Container from "react-bootstrap/esm/Container"
import Home from "./views/Home"

export default function App() {

  return (
    <BrowserRouter>
      <Container>
        <Navbar username = 'Emili'/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}