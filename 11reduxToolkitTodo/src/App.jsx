import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [editingTodo, setEditingTodo] = useState(null); // {id, text} or null

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo editingTodo={editingTodo} setEditingTodo={setEditingTodo} />
      <Todos onEdit={setEditingTodo} />
    </>
  );
}

export default App;
