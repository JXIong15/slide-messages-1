import React, { Component } from "react";
import API from "../../utils/API";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Form from "react-bootstrap/Form";
import "./compose.css";

class Compose extends Component {
  state = {
    token: this.props.token,
    recipient: "",
    sender: localStorage.getItem("username"),
    title: "",
    body: ""
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.recipient || !this.state.title || !this.state.body) {
      alert("Fill out all fields!");
    } else {
      API.newMessage({
        recipient: this.state.recipient,
        sender: this.state.sender,
        title: this.state.title,
        body: this.state.body,
      }, this.state.token)
        .then(resp => alert(`Message sent to ${this.state.recipient}`))
        .then(res => window.location.reload(false))
        .catch(error => console.log(error))
    }
  };

  render() {
    return (
      <div className="row">
        <Header />
        <Nav />

        <div className="body-area col-sm-12 col-md-8">
        <h1>
          COMPOSE MESSAGE
        </h1>
        <Form className="form">
          <Form.Label className="form-label">Recipient:</Form.Label>
          <Form.Control
            value={this.state.recipient}
            name="recipient"
            onChange={e => this.setState({ recipient: e.target.value.toLowerCase() })}
            type="text"
            placeholder="Who is this message going to?"
          />
          <Form.Label className="form-label">Title:</Form.Label>
          <Form.Control
            value={this.state.title}
            name="title"
            onChange={e => this.setState({ title: e.target.value })}
            type="text"
            placeholder="Don't forget a subject title!"
          />
          <Form.Label className="form-label">Message:</Form.Label>
          <Form.Control
            className="text-body"
            value={this.state.body}
            name="body"
            onChange={e => this.setState({ body: e.target.value })}
            placeholder="Type your message here!"
          />
          <button className="btn btn-primary" onClick={this.handleFormSubmit}>Send</button>
        </Form>
      </div>
      </div>
    );
  }
}

export default Compose;
