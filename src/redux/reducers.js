import { combineReducers } from "redux";
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionTypes";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload),
      };
    case UPDATE_TODO:
      const updatedTodos = [...state.todos];
      updatedTodos[action.payload.index] = action.payload.newText;
      return {
        ...state,
        todos: updatedTodos,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
