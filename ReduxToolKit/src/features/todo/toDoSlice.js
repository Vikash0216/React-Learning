import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState = {
    toDos:[{
            id:1,
            toDotext :"HelloWorld"
        }]
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
export const toDoSlice = createSlice({
    name:'toDo',
    initialState,
    reducers:{
        addToDo:(state , action)=>{
           const toDo ={
            id:nanoid(),
            toDotext :action.payload
           }
           state.toDos.push(toDo)
        },
        removeTodo:(state , action)=>{
            state.toDos = state.toDos.filter((todo)=> todo.id !==action.payload)
        },
        updateToDo:(state , action)=>{
            const {id, toDotext} = action.payload
           const todo = state.toDos.find((todo)=>todo.id === id)
           if(todo) todo.toDotext = toDotext
        }

    }
    
})
export const {addToDo ,removeTodo ,updateToDo} = toDoSlice.actions

export default toDoSlice.reducer