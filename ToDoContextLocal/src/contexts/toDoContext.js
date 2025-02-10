import { createContext, useContext } from "react";

export const toDoContext = createContext({
    toDOs: [
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

export const toDoContextProvider = toDoContext.Provider

export default function useToDO() {
    return useContext(toDoContext)
}