import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const todoSlice =  createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: nanoid(6),
        title: action.payload.title,
        isCompleted: false,
        important: false,
        planned:  ''
      })
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    changeTodo(state, action) {
      const changeTodo = state.todos.find(todo => todo.id === action.payload.id);
      changeTodo.isCompleted = !changeTodo.isCompleted;
    }
  }
})

export const {addTodo, removeTodo, changeTodo} = todoSlice.actions;

export default todoSlice.reducer