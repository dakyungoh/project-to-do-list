import "./App.css";
import { useState } from "react";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([
    "산책하기",
    "밥먹기",
    "공부하기",
    "잠 자기",
  ]);
  const [isChecked, setIsChecked] = useState([false, false, false, false]);

  function onClickAddButton() {
    setTodos([...todos, newTodo]);
    setIsChecked([...isChecked, false]);
    setNewTodo("");
  }

  function onClickDeleteButton(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function checkboxButton(event, index) {
    const newIsChecked = [...isChecked];
    newIsChecked[index] = event.target.checked;
    setIsChecked(newIsChecked);
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
              <input
                className="todo-item-checkbox"
                type="checkbox"
                checked={isChecked[index]}
                onClick={(event) => checkboxButton(event, index)}
              />
              {isChecked[index] === false ? (
                <span className="todo-item-text">{todo}</span>
              ) : (
                <span className="todo-item-text-line-through">{todo}</span>
              )}

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
