import { useState } from 'react'
import './App.css'
import UserContextProvide from './context/UserContextProvide'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvide>
      <h1 >New files</h1>
      <Login/>
      <Profile/>
    </UserContextProvide>
  )
}

export default App
