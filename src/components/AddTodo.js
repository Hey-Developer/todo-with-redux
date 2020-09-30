import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actionCreators";
import { Form, Button } from "react-bootstrap";

let input;
let AddTodo = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    onSubmit(input.value);
    input.value = "";
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Add ToDo"
            ref={(node) => {
              input = node;
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          ADD
        </Button>
      </Form>
    </div>
  );
};

//Let's connect this component with redux to get the dispatch action for add todo
const mapStateToProps = (state) => {
  return {
    no: 10,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (input) => {
      dispatch(addTodo(input));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
// Doing this we can directly access the state and dispatch object within our component
