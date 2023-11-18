import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Container from "react-bootstrap/esm/Container"
import Home from "./views/Home"
import Tasks from "./views/Tasks"
import AlertMessage from './components/AlertMessage'
import CategoryType from './types/category'
import Header from './components/Header'
import Login from './views/Login'
import UserType from './types/auth'

export default function App() {

  const [message, setMessage] = useState<string|null>(null)
  const [category, setCategory] = useState<CategoryType|null>(null);

  const flashMessage = (newMessage:string|null, newCategory:CategoryType|null): void => {
    setMessage(newMessage)
    setCategory(newCategory)
  }

  return (
    <BrowserRouter>
      <Container>
        <Header username='Emili' />
        {message && category && <AlertMessage message={message} category={category} flashMessage={flashMessage}/>}
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path="/tasks" element={<Tasks flashMessage={flashMessage}/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}