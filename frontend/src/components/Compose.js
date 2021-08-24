import React, { Component } from "react";

class Compose extends Component {
  state = {
    recipient: "",
    sender: "", // THIS WOULD BE THE USER'S EMAIL
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

  handleFormSubmit = body => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    // event.preventDefault();
    if (!this.state.recipient || !this.state.title || !this.state.body) {
      alert("Fill out all fields!");
    } else {
        fetch('http://127.0.0.1:8000/api/messages/', {
        'method':'POST',
        headers: {
          'Content-Type':'application/json',
          'Authorization': 'Token 9a0ed95a8ee8b82d096d3f6ba4ad07575e08ebbe'
        },
        body:JSON.stringify(body)
      })
        .then(resp => resp.json())
        .catch(error => console.log(error))
      alert(`Message sent to ${this.state.recipient}`);
    }

    this.setState({
      recipient: "",
      title: "",
      body: "",
    });
  };

  render() {
    return (
        <div>
          <p>
            Compose Message
          </p>
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
