import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../redux/actions";

function TodoList() {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [newText, setNewText] = useState("");

  const handleAddTodo = () => {
    dispatch(addTodo(inputText));
    setInputText("");
  };

  const handleDeleteTodo = (index) => {
    dispatch(deleteTodo(index));
  };

  const handleEditTodo = (index, newText) => {
    dispatch(updateTodo(index, newText));
    setIsEditing(false);
    setEditIndex(null);
    setNewText("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {isEditing && editIndex === index ? (
              <>
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                />
                <button onClick={() => handleEditTodo(index, newText)}>
                  Save
                </button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
              </>
            ) : (
              <>
                {todo}
                <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                <button
                  onClick={() => {
                    setIsEditing(true);
                    setEditIndex(index);
                    setNewText(todo);
                  }}
                >
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
