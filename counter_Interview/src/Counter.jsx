import React from 'react'
import './App.css'
import  { useState } from 'react'

const Counter = () => {
  const[counter,setCounter] = useState(0)

// const increaseCounter = ()=>{
//     setCounter(counter+1)
//     setCounter(counter+1)
//     setCounter(counter+1)
//     setCounter(counter+1)
//     // This is not work because react state doesn't work immediatly
// }
// const decreaseCounter =()=>{
//     setCounter(counter-1)
//     setCounter(counter-1)
//     setCounter(counter-1)
//     setCounter(counter-1)
//     // This is not work because react state doesn't work immediatly
// }
const increaseCounter = ()=>{
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
}
const decreaseCounter =()=>{
    setCounter((prevCounter)=>prevCounter-1)
    setCounter((prevCounter)=>prevCounter-1)
    setCounter((prevCounter)=>prevCounter-1)
    setCounter((prevCounter)=>prevCounter-1)
}

return (
    <>
    <h1>Counter App Interview</h1>
    <div>Count: {counter}</div>
    <button onClick ={increaseCounter}>+</button>
    <button onClick ={decreaseCounter}>-</button>
    </>
  )
}


export default Counter