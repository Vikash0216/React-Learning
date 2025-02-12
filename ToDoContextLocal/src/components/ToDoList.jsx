import React, { useState } from 'react'
import { useToDo } from '../contexts'

const ToDoList = ({toDo}) => {
    const {deleteToDo,updateToDo,toggleCompleteToDo} = useToDo()

    const[toDoMsg , settoDoMsg] = useState(toDo.toDo)

    const[istoDoEditable , setIstoDoEditable] = useState(false)
    
    const toggleCompleted = ()=>{
        toggleCompleteToDo(toDo.id)
    }


  const edittoDo = ()=>{
    updateToDo(toDo.id,{...toDo , toDo:toDoMsg})
    setIstoDoEditable(false)
  }

  
  return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                toDo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={toDo.isCompleted}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    istoDoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${toDo.isCompleted ? "line-through" : ""}`}
                value={toDoMsg}
                onChange={(e) => settoDoMsg(e.target.value)}
                readOnly={!istoDoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (toDo.isCompleted) return;

                    if (istoDoEditable) {
                        edittoDo();
                    } else setIstoDoEditable((prev) => !prev);
                }}
                disabled={toDo.isCompleted}
            >
                {istoDoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete toDo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteToDo(toDo.id)}
            >
                ❌
            </button>
        </div>
  )
}

export default ToDoList