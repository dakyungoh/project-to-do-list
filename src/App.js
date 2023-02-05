import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState("");

  const addTodo = (text) => {
    const newTodo = [...todos];
    setTodos(newTodo);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="todo-input-box">
        <input type="text" placeholder="내용을 입력하세요." />
        <button className="todo-input-button">+</button>
      </div>
      <div className="newTodo">
        <ul>
          <li>
            <input className="newTodo-checkbox" type="checkbox" />
            <span className="newTodo-input-box">콩이 산책</span>
            <button className="insert-button">수정</button>
            <button className="delete-button">지우기</button>
          </li>
          <li>
            <input className="newTodo-checkbox" type="checkbox" />
            <span className="newTodo-input-box">밥 먹기</span>
            <button className="insert-button">수정</button>
            <button className="delete-button">지우기</button>
          </li>
          <li>
            <input className="newTodo-checkbox" type="checkbox" />
            <span className="newTodo-input-box">공부 하기</span>
            <button className="insert-button">수정</button>
            <button className="delete-button">지우기</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
