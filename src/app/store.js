import { configureStore } from "@reduxjs/toolkit";
//Store need knowledge of reducer so import it
import todoReducer from "../features/todo/todoSlice"

export const store = configureStore({
    reducer: todoReducer
});