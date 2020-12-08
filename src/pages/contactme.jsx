import React, { Component } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";

class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersEmail: "",
      title: "",
      content: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleContent = this.handleContent.bind(this);
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={4}>
            <Form action="post" onSubmit={this.handleSubmit}>
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
                  onChange={this.handleContent}
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
    const ZapierLink = "";
    e.preventDefault();
    const data = {
      usersEmail: this.state.usersEmail,
      title: " " + this.state.title,
      content: " " + this.state.content,
    };
    fetch(ZapierLink, {
      method: "post",
      body: JSON.stringify(data),
    }).then((response) => {
      console.log("Rquest Complete!");
    });
  }

  handleEmail(e) {
    const email = e.target.value;
    this.setState({
      usersEmail: email,
    });
  }
  handleTitle(e) {
    const title = e.target.value;
    this.setState({
      title: title,
    });
  }
  handleContent(e) {
    const content = e.target.value;
    this.setState({
      content: content,
    });
  }
}

export default ContactMe;
