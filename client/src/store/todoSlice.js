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
        isImportant: action.payload.isImportant,
        planned:  action.payload.planned
      })
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    changeTodo(state, action) {
      const changeTodo = state.todos.find(todo => todo.id === action.payload.id);
      changeTodo.isCompleted = !changeTodo.isCompleted;
    }, 
    importantTodo(state, action){
      const importantTodo = state.todos.find(todo => todo.id === action.payload.id);
      importantTodo.isImportant = !importantTodo.isImportant;
    }
  }
})

export const {addTodo, removeTodo, changeTodo, importantTodo} = todoSlice.actions;

export default todoSlice.reducer