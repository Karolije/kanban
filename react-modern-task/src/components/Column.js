import React from "react";
import Task from "./Task";

function Column({ column, tasks }) {
  return (
    <div>
      <h2>{column.name}</h2>

      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default Column;
