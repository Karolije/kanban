import React, { useState, createContext, useEffect } from "react";

export const Context = createContext();

export const KanbanProvider = ({ children }) => {
  const defaultColumns = [
    { id: 1, name: "Pending", limit: 4 },
    { id: 2, name: "Doing", limit: 3 },
    { id: 3, name: "Done", limit: 2 },
  ];

  const defaultTasks = [
    { id: 1, name: "Task1", idColumn: 1, user: "Anna" },
    { id: 2, name: "Task2", idColumn: 1, user: "Anna" },
    { id: 3, name: "Task3", idColumn: 1, user: "Anna" },
  ];

  const [columns, setColumns] = useState(() => {
    const saved = localStorage.getItem("columns");
    return saved ? JSON.parse(saved) : defaultColumns;
  });
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : defaultTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("columns", JSON.stringify(columns));
  }, [columns]);
  return (
    <Context.Provider value={{ columns, tasks, setTasks }}>
      {children}
    </Context.Provider>
  );
};
