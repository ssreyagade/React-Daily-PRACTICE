import { useState } from "react";

function App() {
  // 🔹 Lazy Initialization
  const [tasks, setTasks] = useState(() => {
    console.log("Initializing tasks...");
    return [];
  });

  // 🔹 Multiple States
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  // 🔹 Add Task
  const addTask = () => {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      name: input,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]); // functional update
    setInput("");
  };

  // 🔹 Delete Task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // 🔹 Toggle Complete (Object + Array update)
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  // 🔹 Functional Update Example
  const addTwoClicks = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task Manager</h2>

      {/* 🔹 Input */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add Task</button>

      {/* 🔹 Task List */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => toggleTask(task.id)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              {task.name}
            </span>

            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* 🔹 Counter */}
      <h3>Button clicked {count} times</h3>

      <button onClick={addTwoClicks}>Add 2 (Functional Update)</button>
    </div>
  );
}

export default App;
