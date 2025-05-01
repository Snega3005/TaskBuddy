import { useState } from "react";

export default function TaskForm({ addTask }) {
  let [task, setTask] = useState("");
  let [priority, setPriority] = useState("Medium");
  let [category, setCategory] = useState("General");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ text: task, priority, category, completed: false });
    setTask("");
    setCategory("General");
    setPriority("Medium");
  };
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div>
        <input onChange={(e) => setTask(e.target.value)} value={task} />
        <span>
          <button>Add Task</button>
        </span>
      </div>
      <div id="btns">
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Low">Low</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </div>
    </form>
  );
}
