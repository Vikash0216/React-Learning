import React, { useState } from 'react'

const ToDoList = (toDo) => {
    const toggleCompleted = ()=>{

    }

  const[istoDoEditable , setIstoDoEditable] = useState(false)
  const deletetoDo = ()=>{

  }
  const[toDoMsg , settoDoMsg] = useState('Hello')
  const edittoDo = ()=>{
    
  }
  return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                toDo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={toDo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    istoDoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${toDo.completed ? "line-through" : ""}`}
                value={toDoMsg}
                onChange={(e) => settoDoMsg(e.target.value)}
                readOnly={!istoDoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (toDo.completed) return;

                    if (istoDoEditable) {
                        edittoDo();
                    } else setIstoDoEditable((prev) => !prev);
                }}
                disabled={toDo.completed}
            >
                {istoDoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete toDo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deletetoDo(toDo.id)}
            >
                ❌
            </button>
        </div>
  )
}

export default ToDoList