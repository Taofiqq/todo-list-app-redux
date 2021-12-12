import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, item: action.payload.item };
        }
        return todo;
      });
    },
    completeTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo, completeTodo } =
  addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
