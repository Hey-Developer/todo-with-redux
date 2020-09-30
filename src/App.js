import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import VisibleTodoList from "./components/VisibleTodoList";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";

function App() {
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <VisibleTodoList />
        </Col>
        <Col>
          <AddTodo />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
