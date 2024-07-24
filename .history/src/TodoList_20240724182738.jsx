import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState();

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    setTask(task.filter((_, i) => i !== index));
  };

  function moveUp(index) {
    if (index > 0) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }

  const moveDown = (index) => {
    if (index <task.length-1) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index + 1]] = 
      [updatedTask[index + 1],updatedTask[index]];
      setTask(updatedTask);
    }
  };

  return (
    <div className="todo">
      <header>
        <h1 className="heading">Todo List</h1>

        <div className="main">
          <input
            type="text"
            className="input"
            id="add"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Enter Your Task"
          />
          <button className="btn add" onClick={addTask}>
            Add
          </button>
        </div>
      </header>
      <ol className="task">
        {task.map((task, index) => (
          <li key={index}>
            <span className="list">{task}</span>
            <span className="btngrp">
              <button className="btn del" onClick={() => removeTask(index)}>
                Delete
              </button>
              <button className="move-btn" onClick={()=>moveUp(index)}>
                👆
              </button>
              <button className="move-btn" onClick={()=>moveDown(index)}>
                👇
              </button>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default TodoList;
