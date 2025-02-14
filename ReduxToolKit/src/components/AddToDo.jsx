import { useState } from "react";
import {useDispatch} from "react-redux"
import {addToDo} from "../features/todo/toDoSlice"
const AddToDo = ({  }) => {
    const [input ,setInput]= useState('')
    const dispatch = useDispatch()
    const addToDoHandler = (e)=>{
        e.preventDefault()
        dispatch(addToDo(input))
        setInput("")
    }


    return (
        <form onSubmit={addToDoHandler} className="flex items-center gap-3 bg-white shadow-lg p-4 rounded-lg">
            <input
                type="text"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter a new task..."
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
            >
                Add
            </button>
        </form>
    );
};

export default AddToDo;
