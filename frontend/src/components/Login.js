import React, { Component } from "react";
import API from "../utils/API";

class Login extends Component {
  // Setting the component's initial state
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.username) {
      alert("Fill out your username please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password`
      );
    } else {
      alert(`Hello ${this.state.username}`);
    }

    this.setState({
      username: "",
      password: ""
    });
  };

  handleLogin = (event) => {
    event.preventDefault();
    
    API.loginUser({username:this.state.username, password:this.state.password})
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="row">
        <div className="col-6">
          <p>
            Don't have an account? Sign up here!
          </p>
          <form className="form">
            <input
              value={this.state.username}
              name="username"
              onChange={this.handleInputChange}
              type="username"
              placeholder="username"
            />
            <input
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange}
              type="password"
              placeholder="Password"
            />
            <button onClick={this.handleFormSubmit}>Sign Up</button>
          </form>
        </div>

        <div className="col-6">
          <p>
            Have an account? Login here!
          </p>
          <form className="form">
            <input
              value={this.state.username}
              name="username"
              onChange={this.handleInputChange}
              type="username"
              placeholder="username"
            />
            <input
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange}
              type="password"
              placeholder="Password"
            />
            <button className="btn btn-primary" onClick={this.handleLogin}>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
