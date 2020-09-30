import React from "react";
import FilterLink from "./FilterLink";
import { Container, Row, Col } from "react-bootstrap";
import { visibilityFilter } from "../redux/actionTypes";

function Footer() {
  return (
    <Container className="my-4">
      <Row>
        <Col className="text-center">
          <FilterLink filter={visibilityFilter.SHOW_ALL}>SHOW_ALL</FilterLink>
        </Col>
        <Col className="text-center">
          <FilterLink filter={visibilityFilter.SHOW_COMPLETED}>
            SHOW_COMPLETED
          </FilterLink>
        </Col>
        <Col className="text-center">
          <FilterLink filter={visibilityFilter.SHOW_ACTIVE}>
            SHOW_ACTIVE
          </FilterLink>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
