import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Todo from "./Todo";

function TodoList({ todos, onTodoClick, deleteTodo }) {
  return (
    <ListGroup>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          onClick={() => {
            onTodoClick(index);
          }}
          {...todo} // destructuring todo i.e text and completed prop
          deleteTodo={() => {
            deleteTodo(index);
          }}
        />
      ))}
    </ListGroup>
  );
}

export default TodoList;
