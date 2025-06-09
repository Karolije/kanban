import React, { useContext } from "react";
import { Context } from "./context";

function Task({ task }) {
  const { tasks, setTasks, columns } = useContext(Context);

  const moveTask = (direction) => {
    const newColumnID = task.idColumn + direction;
    const targetColumn = columns.find((col) => col.id === newColumnID);
    if (!targetColumn) return;

    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, idColumn: newColumnID } : t
    );
    setTasks(updatedTasks);
  };
  return (
    <div>
      <p>{task.name}</p>
      <p>{task.user}</p>

      <div>
        <button onClick={() => moveTask(-1)}>Poprzednie</button>
        <button onClick={() => moveTask(+1)}>Następne</button>
      </div>
    </div>
  );
}

export default Task;
