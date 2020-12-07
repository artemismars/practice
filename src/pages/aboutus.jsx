import React, { Component } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Selfie from "../selfie.jpg";

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
            <Col xs={6}>
              <Image src={Selfie} width={300}></Image>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default AboutUs;
