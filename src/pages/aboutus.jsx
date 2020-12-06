import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class AboutUs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col xs={6}>1</Col>
            <Col xs={6}>2</Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default AboutUs;
