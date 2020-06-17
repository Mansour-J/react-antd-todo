import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit'
import { v1 as uuidV1 } from 'uuid';

export interface Todo {
    id?: string;
    name: string;
    completed?: boolean;
}  

export interface ITodoReducer {
    todos: Todo[];
}
  
//
export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: []
  } as ITodoReducer,
  reducers: {
    addTodo: (state, action) => { state.todos.push({ id: uuidV1(), completed: action.payload.completed, name: action.payload.name }) },
    toggleTodo: (state, action) => {
        state.todos.map((todo) => {
            if (todo.id == action.payload.id) { 
               todo.completed = !todo.completed;
            }
   
            return todo;
       })
    },
    removeTodo: (state, action) => { state.todos = state.todos.filter((todo: Todo) => todo.id !== action.payload.id) }
    }
})