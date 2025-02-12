import React, { useState } from "react";
import { useToDo } from "../contexts";

const InputForm = () => {
  const [toDoText, setToDoText] = useState("");
  const { addToDo } = useToDo();

  const submitButton = (e) => {
    e.preventDefault();
    if(!toDoText)return
    addToDo({toDoText, complete:false})
    setToDoText("")
  };


  return (
    <form
      onSubmit={submitButton}
      className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md"
    >
      <input
        value={toDoText}
        onChange={(e) => setToDoText(e.target.value)}
        type="text"
        placeholder="Enter a task..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Add
      </button>
    </form>
  );
};

export default InputForm;
