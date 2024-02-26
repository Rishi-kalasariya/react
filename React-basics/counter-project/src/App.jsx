import { useState } from 'react'


function App() {

  let [counter,setcounter] = useState(1)

  const increment=() =>{
    setcounter(counter+1);
    
  }
  function decrement(){
    setcounter(counter-1);
  }
  return (
    <>
    <h1>Counter programm {counter}</h1>
    <button onClick={increment}>add value {counter}</button>
    <button onClick={decrement}>dec value {counter}</button>
    </>
  )
}

export default App
