import React, { useState } from "react";
import { useToDo } from "../contexts";

const ToDoItem = ({ toDo }) => {
  const { deleteToDo, editToDo, toogleCompleteToDo } = useToDo();
  const [toDotext, setToDotext] = useState(toDo.toDo);
  const [editable, setEditable] = useState(false);

  const toogleComplete = () => {
    toogleCompleteToDo(toDo.id);
    setEditable(false)
  };

  const handleEdit = () => {
    if (editable) {
      editToDo(toDo.id, { ...toDo, toDo: toDotext });
    }
    setEditable(!editable);
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md border border-gray-200">
      {/* Checkbox & Task */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="w-5 h-5 text-blue-500 rounded focus:ring-blue-400"
          checked={toDo.complete}
          onChange={toogleComplete}
        />
        {editable ? (
          <input
            type="text"
            value={toDotext}
            onChange={(e) => setToDotext(e.target.value)}
            className="border border-gray-300 p-1 rounded"
          />
        ) : (
          <span className="text-gray-700 text-lg">{toDotext}</span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleEdit}
          className="px-3 py-1 text-white bg-green-500 rounded-lg hover:bg-green-600 transition"
        >
          {editable ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => deleteToDo(toDo.id)}
          className="px-3 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
