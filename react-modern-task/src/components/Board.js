import React, { useContext } from "react";
import { Context } from "./context";
import Column from "./Column";

function Board() {
  const { columns, tasks } = useContext(Context);
  return (
    <div className="kanban-board">
      {columns.map((column) => {
        const columnTasks = tasks.filter((task) => task.idColumn === column.id);
        return <Column key={column.id} column={column} tasks={columnTasks} />;
      })}
    </div>
  );
}

export default Board;
