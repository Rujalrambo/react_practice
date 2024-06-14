import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = function(){
    // counter = counter + 1;
    if (counter >= 20) {
      alert('process limit reached')
    }
    else{
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    }
  }
    
  const removeValue = () => {
    if (counter <= 0){
      alert('it has reached its limit')
    }
    else{
    setCounter(counter - 1)

    }
  }

  return (
    <>
    <h1> new file</h1>
    <h1> new value: {counter}</h1>

    <button onClick={addValue}>add value: {counter}</button>
    <br/>
    <button onClick={removeValue}>remove value: {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
