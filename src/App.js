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
  const [fitlerdTodos, setFilterTodos] = useState([]);
  // use effect
  useEffect(() => {
    filterHander();
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
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
