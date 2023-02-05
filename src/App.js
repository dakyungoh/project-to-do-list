import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "산책하기",
    "밥먹기",
    "공부하기",
    "잠 자기",
  ]);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="todo-input-box">
        <input type="text" placeholder="내용을 입력하세요." />
        <button className="todo-input-button">+</button>
      </div>
      <div className="todo-list">
        <ul>
          {todos.map((todo) => (
            <li>
              <input className="todo-item-checkbox" type="checkbox" />
              <span className="todo-item-text">{todo}</span>
              <button className="insert-button">수정</button>
              <button className="delete-button">지우기</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
