import { createContext,useContext } from "react";

export const toDoContext = createContext({})

export const toDoContextProvider = toDoContext.Provider

export default function useToDO(){
    return useContext(toDoContext)
}