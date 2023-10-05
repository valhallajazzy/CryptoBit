import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice'
import listReducer from './listSlice'


export default configureStore({
  reducer: {
    todos: todoReducer,
    list: listReducer,
  }
})