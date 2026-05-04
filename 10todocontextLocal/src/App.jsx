import { useState, useEffect } from "react";
import "./App.css";
import { TodoProvider } from "./Context";
import { TodoForm, TodoItem } from "./components/index.js";

function App() {
  const [todo, settodo] = useState([]);

  const addTodo = (todo) => {
    settodo((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, newTodo) => {
    settodo((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)),
    );
  };

  const deleteTodo = (id) => {
    settodo((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    settodo((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo,
      ),
    );
  };

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todo"));
    if (todo && todo.length > 0) {
      settodo(todo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <TodoProvider value={{ todo, addTodo, deleteTodo, updateTodo }}>
      {/* <h1 className="bg-green-600 p-4 text-center m-10">Hello World</h1> */}

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
