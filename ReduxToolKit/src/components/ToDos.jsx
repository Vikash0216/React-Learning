import { useState } from "react";
import { Edit, Save, Trash } from "lucide-react"; 
import { useSelector , useDispatch } from "react-redux";
import { removeTodo,updateToDo } from "../features/todo/toDoSlice";

const ToDos = () => {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch()
    const toDos = useSelector(state => state.toDos)
    const editToDo = (id,toDotext)=>{
        updateToDo(id,toDotext)
        setIsEditing(!isEditing)
    }

    return (
        <div>
        {toDos.map((todo)=>(
        <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg border border-gray-300">
            {isEditing ? (
                <input
                    type="text"
                    className="flex-1 px-2 py-1 border rounded focus:outline-none"
                    defaultValue={todo.toDotext}
                />
            ) : (
                <span className="flex-1">{todo.toDotext}</span>
            )}

            <div className="flex gap-2">
                <button
                    onClick={()=>dispatch(editToDo(todo.id,todo.toDotext))}
                    className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                    {isEditing ? <Save size={16} /> : <Edit size={16} />}
                </button>
                <button 
                onClick={()=>dispatch(removeTodo(todo.id))}
                className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                    <Trash size={16} />
                </button>
            </div>
            
        </div>
        ))}
        </div>
    );
};

export default ToDos;