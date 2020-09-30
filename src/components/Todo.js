import React from "react";
import { Button, ListGroup } from "react-bootstrap";

function Todo({ onClick, text, completed, deleteTodo }) {
  return (
    <React.Fragment>
      <ListGroup.Item
        style={{
          textDecoration: completed ? "line-through" : "none",
          opacity: completed ? 0.5 : 1,
        }}
        onClick={onClick}
      >
        {text}
      </ListGroup.Item>
      <Button
        size="sm"
        onClick={deleteTodo}
        variant="danger"
        style={{
          opacity: completed ? 0.5 : 1,
        }}
      >
        Delete
      </Button>
    </React.Fragment>
  );
}

export default Todo;
