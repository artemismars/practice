import React, { Component } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";

class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      title: "",
      message: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={4}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  onChange={this.handleEmail}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title.</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="title"
                  onChange={this.handleTitle}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={this.handleMessage}
                />
              </Form.Group>
              <button type="submit">submit</button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }

  handleSubmit(e) {
    // Zapier Link is empty due to the sercurity issue
    const ZapierLink = "http://localhost:8000";
    e.preventDefault();
    const data = {
      email: this.state.email,
      title: " " + this.state.title,
      message: " " + this.state.message,
    };
    fetch(ZapierLink, {
      method: "post",
      headers: new Headers({
        "content-type": "application/json",
      }),
      body: JSON.stringify(data),
    }).then((response) => {
      console.log("Rquest Complete!");
    });
  }

  handleEmail(e) {
    const email = e.target.value;
    this.setState({
      email: email,
    });
  }
  handleTitle(e) {
    const title = e.target.value;
    this.setState({
      title: title,
    });
  }
  handleMessage(e) {
    const message = e.target.value;
    this.setState({
      message: message,
    });
  }
}

export default ContactMe;
