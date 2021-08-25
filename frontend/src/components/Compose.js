import React, { Component } from "react";
import API from "../utils/API";

class Compose extends Component {
  state = {
    recipient: "",
    sender: "",
    title: "",
    body: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;


    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.recipient || !this.state.title || !this.state.body) {
      alert("Fill out all fields!");
    } else {
        API.newMessage({
          recipient: this.state.recipient,
          // sender: this.state.sender,
          sender: "test",
          title: this.state.title,
          body: this.state.body,
        })
        .then(resp => alert(`Message sent to ${this.state.recipient}`))
        .catch(error => console.log(error))
    }

    console.log(this.state)

    this.setState({
      recipient: "",
      sender: "",
      title: "",
      body: "",
    });
  };

  render() {
    return (
        <div>
          <h2>
            Compose Message
          </h2>
          <form className="form">
            <input
              value={this.state.recipient}
              name="recipient"
              onChange={this.handleInputChange}
              type="email"
              placeholder="Recipient"
            />
            <input
              value={this.state.title}
              name="title"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Title"
            />
            <input
              value={this.state.body}
              name="body"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Body"
            />
            <button onClick={this.handleFormSubmit}>Send</button>
          </form>
        </div>
    );
  }
}

export default Compose;
