import "./App.css";
import Board from "./components/Board";
import Form from "./components/Form";
import { KanbanProvider } from "./components/context";

function App() {
  return (
    <div className="App">
      <KanbanProvider>
        <h1>Tablica Kanban</h1>
        <Form />
        <Board />
      </KanbanProvider>
    </div>
  );
}

export default App;
