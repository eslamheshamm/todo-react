import React from "react";
import Todo from "./Todo";
const TodoList = ({ todos, setTodos, fitleredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {fitleredTodos.map((todo) => (
          <Todo
            text={todo.text}
            id={todo.id}
            key={todo.id}
            todos={todos}
            todo={todo}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
