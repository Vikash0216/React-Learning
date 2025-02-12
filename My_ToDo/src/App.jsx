import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './contexts'
import InputForm from './components/InputForm'


function App() {

  const [allTodos , setAllToDos] = useState([])

  const addToDo = (toDo)=>{
    setAllToDos((prevToDos)=> [...prevToDos,{id:Date.now(),...toDo}])
  }

  const deleteToDo = (id)=>{
    setAllToDos((prevToDos)=>prevToDos.filter((todo)=> todo.id !== id))
  }

  const editToDo = (id,toDo)=>{
    setAllToDos((prevToDos)=>
    prevToDos.map((todo)=>
    todo.id === id ? toDo :todo
    ))
  }

 const toogleCompleteToDo = (id)=>{
  setAllToDos((prevToDos)=>
  prevToDos.map((todo)=>(
    todo.id === id
    ?{...todo,complete : !todo.complete}
    :todo
  )))
 }

  useEffect(()=>{
   const todos =  localStorage.getItem("allToDos")
   if(todos && todos.length>0){
    setAllToDos(JSON.parse(todos))
   }
  },[])

  useEffect(()=>{
    localStorage.setItem("allToDos",JSON.stringify(allTodos))
  },[allTodos])
 
  return (
    <TodoContextProvider value={{allTodos,addToDo,deleteToDo,editToDo,toogleCompleteToDo}}>
      <InputForm />
    </TodoContextProvider>
  )
}

export default App
