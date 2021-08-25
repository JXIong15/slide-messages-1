import React, { Component } from "react";
import API from "../utils/API";
import Nav from "./Nav";

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
        .then(res => {
          this.setState({
            recipient: "",
            sender: "",
            title: "",
            body: "",
          });
        })
        .catch(error => console.log(error))
    }
  };

  render() {
    return (
      <div>
        <Nav />

        <div className="body-area col-sm-12 col-md-8">
        <h2>
          COMPOSE MESSAGE
        </h2>
        <form className="form">
          <input
            value={this.state.recipient}
            name="recipient"
            onChange={e => this.setState({ recipient: e.target.value.toLowerCase() })}
            type="text"
            placeholder="Recipient"
          />
          <input
            value={this.state.title}
            name="title"
            onChange={e => this.setState({ title: e.target.value })}
            type="text"
            placeholder="Title"
          />
          <input
            value={this.state.body}
            name="body"
            onChange={e => this.setState({ body: e.target.value })}
            type="textarea"
            placeholder="Body"
          />
          <button onClick={this.handleFormSubmit}>Send</button>
        </form>
      </div>
      </div>
    );
  }
}

export default Compose;
