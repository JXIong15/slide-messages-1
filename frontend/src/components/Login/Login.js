import React, { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import API from "../../utils/API";
import Form from "react-bootstrap/Form";
import "./login.css";

// Login/Registration Credit: Parwiz Forogh (https://www.youtube.com/watch?v=VBqJ0-imSMU&t=21920s)
function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useCookies(['mytoken']);
  const [isLogin, setLogin] = useState(true);
  let history = useHistory()

  // if token exists for user, user is logged in and taken to their messages
  useEffect(() => {
    if (token['mytoken']) {
      history.push('/inbox')
    }
  }, [token])


  const handleLogin = event => {
    event.preventDefault();
    API.loginUser({ username, password })
      .then(res => {
        setToken('mytoken', res.data.token)
        localStorage.setItem('username', username)
      })
      .catch(err => console.log(err))
  }

  const handleRegister = () => {
    API.registerUser({ username, password })
      .then(res => handleLogin())
      .catch(err => console.log(err))
  }

  return (
    <div>
      <header>
        <h1>SliDeMy</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots-fill" viewBox="0 0 16 16">
          <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </svg>
      </header>

      <div className="row login">
        <section className="col-md-8 login-form">
          {isLogin ? <h2>Login</h2> : <h2>Register</h2>}
          <Form className="form">
          <Form.Label className="form-label">Username:</Form.Label>
            <Form.Control
              className="label"
              value={username}
              name="username"
              onChange={e => setUsername(e.target.value.toLowerCase())}
              type="username"
              placeholder="username"
            />
            <Form.Label className="form-label">Password:</Form.Label>
            <Form.Control
              className="label"
              value={password}
              name="password"
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />

            {isLogin ? <button className="btn btn-primary" onClick={handleLogin}>Login</button>
              : <button className="btn btn-primary" onClick={handleRegister}>Register</button>}
          </Form>
        </section>

        <section className="col-md-3">
          {isLogin ?
            <div>
              <p>Don't have an account?</p>
              <button className="btn btn-primary" onClick={() => setLogin(false)}> Sign up here!</button>
            </div> :
            <div>
              <p>Already have an account with us?</p>
              <button className="btn btn-primary" onClick={() => setLogin(true)}> Login here!</button>
            </div>
          }
        </section>
      </div>
    </div>
  );
}

export default Login;
