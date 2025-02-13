import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './contexts'
import InputForm from './components/InputForm'
import ToDoItem from './components/ToDoItem'


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
   const todos =  JSON.parse(localStorage.getItem("allToDos"))
   if(todos && todos.length >0){
    setAllToDos(todos)
   }
  },[])

  useEffect(()=>{
    localStorage.setItem("allToDos",JSON.stringify(allTodos))
  },[allTodos])
 
  return (
    <TodoContextProvider value={{allTodos,addToDo,deleteToDo,editToDo,toogleCompleteToDo}}>
      <InputForm />
      {allTodos.map((todo)=>(
        <div key={todo.id}
        className='w-full'>
          <ToDoItem toDo={todo}/>
        </div>
      ))}
    </TodoContextProvider>
  )
}

export default App
