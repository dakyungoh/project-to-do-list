import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "산책하기",
    "밥먹기",
    "공부하기",
    "잠 자기",
  ]);
  const [newTodo, setNewTodo] = useState("");

  function onClickAddButton() {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  function onClickDeleteButton(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="todo-input-box">
        <input
          type="text"
          placeholder="내용을 입력하세요."
          value={newTodo}
          onChange={(event) => {
            setNewTodo(event.target.value);
          }}
        />
        <button className="todo-input-button" onClick={onClickAddButton}>
          +
        </button>
      </div>
      <div className="todo-list">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <input className="todo-item-checkbox" type="checkbox" />
              <span className="todo-item-text">{todo}</span>
              <button
                className="delete-button"
                onClick={() => {
                  onClickDeleteButton(index);
                }}
              >
                지우기
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
