import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    toDos: [
        {
            id: 1,
            toDo: "My first toDo",
            isCompleted: false,
        }
    ],
    addToDo: (toDo) => { },
    deleteToDo: (id) => { },
    updateToDo: (id, toDo) => { },
    toggleCompleteToDo: (id) => { }

}
)

export const ToDoContextProvider = ToDoContext.Provider

export  function useToDo() {
    return useContext(ToDoContext)
}