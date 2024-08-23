import { configureStore } from "@reduxjs/toolkit";
import {todoReducer} from "../features/todos/todoSlice.js";
import { userReducer } from "../features/users/userSlice.js";



export const store =  configureStore({
    reducer: {
        todo:todoReducer,
        user:userReducer
    }
})