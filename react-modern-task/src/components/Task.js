import React, { useContext } from "react";
import { Context } from "./context";

function Task({ task }) {
  const { tasks, setTasks, columns } = useContext(Context);

  const moveTask = (direction) => {
    const newColumnID = task.idColumn + direction;
    const targetColumn = columns.find((col) => col.id === newColumnID);
    if (!targetColumn) return;

    const tasksInTargetColumn = tasks.filter((t) => t.idColumn === newColumnID);
    if (tasksInTargetColumn.length >= targetColumn.limit) return;
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, idColumn: newColumnID } : t
    );
    setTasks(updatedTasks);
  };
  return (
    <div className="kanban-task">
      <p>{task.name}</p>
      <p>{task.user}</p>

      <div className="buttons">
        <button onClick={() => moveTask(-1)}>Prev</button>
        <button onClick={() => moveTask(+1)}>Next</button>
      </div>
    </div>
  );
}

export default Task;
