import {createContext , useContext} from 'react'

export const TodoContext = createContext({
   allTodos: [
    {
        id:1,
        toDo:'First Todo',
        complete:false
    }],
    addToDo:()=>{},
    updateToDo:()=>{},
    deleteToDo:()=>{},
    toogleCompleteToDO:()=>{}
})

export const TodoContextProvider = TodoContext.Provider

export default function useToDo(){
    useContext(TodoContext)
}

