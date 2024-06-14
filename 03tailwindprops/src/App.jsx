import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'light',
    agge: 21
  }
  let myArr = [1,2,3]
  return (
    <>
    <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>Tailwind test</h1>
    
    <Card username='light' btnText="text me"/>
    <Card username="dark" btnText="click me" />
    </>
  )
}

export default App
