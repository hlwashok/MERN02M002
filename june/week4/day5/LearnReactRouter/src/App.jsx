import React from 'react'
import Home from './components/Home'
import { Route,Routes } from 'react-router'
import Service from './components/Service'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'
import FetchID from './components/FetchID'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <strong>Welcome to React Router World</strong>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/byId/:id' element={<FetchID/>}></Route>
    </Routes>
    
    </>
  )
}

export default App
