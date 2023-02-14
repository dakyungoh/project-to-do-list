import "./App.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
function App() {
  const [isDarkmode, setIsDarkmode] = useState(true);
  const [newTodoText, setNewTodoText] = useState("");
  const storageTodoItemString = window.localStorage.getItem("todoItems");
  const storageTodoItem = storageTodoItemString
    ? JSON.parse(storageTodoItemString)
    : [];
  const [todoItems, setTodoItems] = useState(storageTodoItem);

  useEffect(() => {
    window.localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  function changeDisplayMode() {
    setIsDarkmode(!isDarkmode);
  }

  function onClickAddButton() {
    setTodoItems([...todoItems, { name: newTodoText, isChecked: false }]);
    setNewTodoText("");
  }

  function onClickDeleteButton(index) {
    const nextTodoItems = [...todoItems];
    nextTodoItems.splice(index, 1);
    setTodoItems(nextTodoItems);
  }

  function onClickCheckboxButton(index) {
    const nextTodoItems = [...todoItems];
    nextTodoItems[index].isChecked = !nextTodoItems[index].isChecked;
    setTodoItems(nextTodoItems);
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
          placeholder="할 일을 입력하세요."
          value={newTodoText}
          onChange={(event) => {
            setNewTodoText(event.target.value);
          }}
        />
        <button className="todo-input-button" onClick={onClickAddButton}>
          +
        </button>
      </div>
      <p className="totalCount">{`Total : ${todoItems.length}`}</p>
      <div className="todo-list">
        <ul>
          {todoItems.map((todoItem, index) => (
            <li key={index}>
              <input
                className="todo-item-checkbox"
                type="checkbox"
                checked={todoItem.isChecked}
                onClick={() => onClickCheckboxButton(index)}
              />
              {todoItem.isChecked === false ? (
                <span className="todo-item-text">{todoItem.name}</span>
              ) : (
                <span className="todo-item-text-line-through">
                  {todoItem.name}
                </span>
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
