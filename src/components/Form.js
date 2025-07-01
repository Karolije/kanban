import React, { useContext, useState } from "react";
import { Context } from "./context";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const { tasks, setTasks, columns } = useContext(Context);
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!name || !user) return;

    const firstColumn = columns.find((col) => col.id === 1);
    const tasksInFirstColumn = tasks.filter((task) => task.idColumn === 1);

    if (tasksInFirstColumn.length >= firstColumn.limit) {
      setError("Task limit in 'Pending' column.");
      return;
    }
    const newTask = {
      id: uuidv4(),
      name,
      user,
      idColumn: 1,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    setName("");
    setUser("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="kanban-form">
        <label>Nazwa zadania</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Użytkownik</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button type="submit">Dodaj zadanie</button>
      </form>{" "}
      {error && (
        <p style={{ color: "red", marginTop: "8px", textAlign: "center" }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default Form;
