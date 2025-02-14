import {configureStore} from "@reduxjs/toolkit"

import toDoReducer from "../features/todo/toDoSlice" 
export const toDoStore = configureStore({
    reducer:toDoReducer
})