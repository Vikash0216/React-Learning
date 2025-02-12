import {createContext , useContext} from 'react'

export const TodoContext = createContext({
   allTodos: [
    {
        id:1,
        toDo:'First Todo',
        complete:false
    }],
    addToDo:()=>{},
    editToDo:()=>{},
    deleteToDo:()=>{},
    toogleCompleteToDo:()=>{}
})

export const TodoContextProvider = TodoContext.Provider

export  function useToDo(){
    useContext(TodoContext)
}

