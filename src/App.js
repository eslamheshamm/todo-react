import React, { useState, useEffect } from "react";
import "./App.css";
// Componants
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  // state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [fitleredTodos, setFilterTodos] = useState([]);
  // use effect
  useEffect(() => {
    filterHander();
    saveLocalTodos();
    console.log("hiii");
  }, [todos, status]);

  // functions
  const filterHander = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };
  const saveLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Eslam TODO-LIST</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        fitleredTodos={fitleredTodos}
      />
    </div>
  );
}

export default App;
