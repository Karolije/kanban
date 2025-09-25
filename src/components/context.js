import React, { useState, createContext, useEffect } from "react";

export const Context = createContext();

export const KanbanProvider = ({ children }) => {
  const defaultColumns = [
    { id: 1, name: "Pending", limit: 4 },
    { id: 2, name: "Doing", limit: 3 },
    { id: 3, name: "Done", limit: 2 },
  ];

  const defaultTasks = [
    { id: 1, name: "Zaimplementuj komponent React", idColumn: 1, user: "Anna" },
    { id: 2, name: "Napisz testy jednostkowe", idColumn: 1, user: "Piotr" },
    { id: 3, name: "Skonfiguruj Redux", idColumn: 1, user: "Anna" },
    { id: 4, name: "Stwórz responsywny layout", idColumn: 2, user: "Piotr" },
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
