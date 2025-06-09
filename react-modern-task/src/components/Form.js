import React, { useContext, useState } from "react";
import { Context } from "./context";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const { tasks, setTasks, columns } = useContext(Context);
  const [name, setName] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !user) return;

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
    <form onSubmit={handleSubmit}>
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
    </form>
  );
}

export default Form;
