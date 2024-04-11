import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionTypes";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const deleteTodo = (index) => ({
  type: DELETE_TODO,
  payload: index,
});

export const updateTodo = (index, newText) => ({
  type: UPDATE_TODO,
  payload: { index, newText },
});
