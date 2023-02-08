import "./App.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
function App() {
  const [isDarkmode, setIsDarkmode] = useState(true);
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(
    window.localStorage.getItem("todos").split(",")
  );
  const [isChecked, setIsChecked] = useState(
    window.localStorage
      .getItem("checked")
      .split(",")
      .map((item) => item === "true")
  );

  useEffect(() => {
    window.localStorage.setItem("todos", todos);
  }, [todos]);

  useEffect(() => {
    window.localStorage.setItem("checked", isChecked);
  }, [isChecked]);

  function changeDisplayMode() {
    setIsDarkmode(!isDarkmode);
  }

  function onClickAddButton() {
    setTodos([...todos, newTodo]);
    setIsChecked([...isChecked, false]);
    setNewTodo("");
  }

  function onClickDeleteButton(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    const newIsChecked = [...isChecked];
    newIsChecked.splice(index, 1);
    setIsChecked(newIsChecked);
  }

  function checkboxButton(event, index) {
    const newIsChecked = [...isChecked];
    newIsChecked[index] = event.target.checked;
    setIsChecked(newIsChecked);
  }

  return (
    <div className={`App ${isDarkmode && "darkmode"}`}>
      <span className="darkmode-button" onClick={changeDisplayMode}>
        {isDarkmode ? "🌞" : "🌝"}
      </span>
      <h1>To Do List</h1>
      <div className="todo-input-box">
        <input
          className="input-box"
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
      <p className="totalCount">{`Total : ${todos.length}`}</p>
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
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
