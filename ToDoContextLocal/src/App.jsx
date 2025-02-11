import { useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import { ToDoContextProvider } from "./contexts";

function App() {
  const[toDos , setToDos] = useState([])
 const addToDo =(toDo)=>{

 }

 const deleteToDo = (id)=>{

 }

 const updateToDo = (id,toDo)=>{
  
 }
 const toggleCompleteToDo = (id)=>{

 }
  return (
    <ToDoContextProvider  value={{toDos,addToDo,deleteToDo,updateToDo,toggleCompleteToDo}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">
          <ToDoForm />
          </div>
        <div className="flex flex-wrap gap-y-3">
      <ToDoList />
        </div>
      </div>
    </div>
    </ToDoContextProvider>
  );
}

export default App;
