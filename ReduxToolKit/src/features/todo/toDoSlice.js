import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState = {
    toDos:[{
            id:1,
            toDotext :"Enter"
        }]
}
const deleteToDo = (id)=>{
    setAllToDos((prevToDos)=>prevToDos.filter((todo)=> todo.id !== id))
  }

export const toDoSlice = createSlice({
    name:'toDo',
    initialState,
    reducers:{
        addToDo:(state , action)=>{
            if (!action.payload.trim()) return;
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
           if(todo && toDotext.trim()) {
            todo.toDotext = toDotext
           }
        }

    }
    
})
export const {addToDo ,removeTodo ,updateToDo} = toDoSlice.actions

export default toDoSlice.reducer