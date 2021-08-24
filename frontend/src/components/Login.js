import React, { useState, useEffect } from "react";
import API from "../utils/API";
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useCookies(['mytoken']);
  let history = useHistory()

  // if token exists for user, user is logged in and taken to their messages
  useEffect(() => {
    if(token['mytoken']) {
      history.push('/messages')
    }
  }, [token])

  const handleFormSubmit = event => {
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

  const handleLogin = (event) => {
    event.preventDefault();
    API.loginUser({username, password})
      .then(res => {
        console.log(res.data.token)
        setToken('mytoken', res.data.token)
      })
      .catch(err => console.log(err))
  }


  // render() {
    return (
      <div className="row">
        {/* <div className="col-6">
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
        </div> */}

        <div className="col-6">
          <p>
            Have an account? Login here!
          </p>
          <form className="form">
            <input
              value={username}
              name="username"
              onChange={e => setUsername(e.target.value)}
              type="username"
              placeholder="username"
            />
            <input
              value={password}
              name="password"
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    );
  // }
}

export default Login;
