import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from "./TaskList";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState(
    "Add a task to get started!"
  );

  const [headingColor, setHeadingColor] = useState("");

  function addTask(event) {
    event.preventDefault();

    if (task.trim() === "") {
      return;
    }

    setTasks([...tasks, task]);

    setMessage(`Task added: ${task}!`);

    setTask("");

    setHeadingColor("lightblue");
  }

  return (
    <div className="container mt-5">

      <h1
        className="text-center p-3"
        style={{ backgroundColor: headingColor }}
      >
        React Task Planner
      </h1>

      <div className="card p-4 mb-4 shadow">

        <form onSubmit={addTask}>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter task name"
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />

          <button
            type="submit"
            className="btn btn-primary"
          >
            Add Task
          </button>

        </form>

      </div>

      <TaskList
        tasks={tasks}
        message={message}
      />

    </div>
  );
}

export default App;