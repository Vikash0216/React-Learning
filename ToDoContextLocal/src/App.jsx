import { useEffect, useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import { ToDoContextProvider } from "./contexts";

function App() {
  const [toDos, setToDos] = useState([]);
  const addToDo = (toDo) => {
    setToDos((oldToDos) => [{ id: Date.now(), ...toDo }, ...oldToDos]);
  };

  const deleteToDo = (id) => {
    setToDos((oldToDos) => oldToDos.filter((everyToDo)=>everyToDo.id !== id));
  };

  const updateToDo = (id, toDo) => {
    setToDos((oldToDos) =>
      oldToDos.map((everyToDo) => (everyToDo.id === id ? toDo : everyToDo))
    );
  };
  const toggleCompleteToDo = (id) => {
    setToDos((oldToDos) =>
      oldToDos.map((everyToDo)=>
        everyToDo.id === id
          ? { ...everyToDo, isCompleted: !everyToDo.isCompleted }
          : everyToDo
      )
    );
  };

  useEffect(() => {
    const toDos = JSON.parse(localStorage.getItem("toDos"));
    if (toDos && toDos.length > 0) {
      setToDos(toDos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  return (
    <ToDoContextProvider
      value={{ toDos, addToDo, deleteToDo, updateToDo, toggleCompleteToDo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <ToDoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {toDos.map((toDo) => (
              <div key={toDo.id} className="w-full">
                <ToDoList toDo={toDo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoContextProvider>
  );
}

export default App;
