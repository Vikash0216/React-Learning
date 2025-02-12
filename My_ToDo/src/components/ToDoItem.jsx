import React from 'react'
import { useToDo } from '../contexts';

const ToDoItem = () => {
    const{deleteToDo,editToDo,toogleCompleteToDo} = useToDo()
    return (
      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md border border-gray-200">
        {/* Checkbox & Task */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="w-5 h-5 text-blue-500 rounded focus:ring-blue-400"
          />
          <span className="text-gray-700 text-lg">Sample Task</span>
        </div>
  
        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 text-white bg-green-500 rounded-lg hover:bg-green-600 transition">
            Edit
          </button>
          <button 
          onClick={deleteToDo(id)}
          className="px-3 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600 transition">
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default ToDoItem;
  