import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{
        id: 1,
        text: "hello world"
    }]
};

export const todoSlices = createSlice({
    name: "todo",
    // initialState: initialState
    initialState,
    reducers: {
        addTodo :(state,action)=>{
            const todo  = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
    }
})

export const { addTodo,removeTodo } = todoSlices.actions;

export const todoReducer =  todoSlices.reducer