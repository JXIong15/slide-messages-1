import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

// Login/Registration Credit: Parwiz Forogh (https://www.youtube.com/watch?v=VBqJ0-imSMU&t=21920s)
function Login() {
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
    <div className="row">
      <div className="col-6">
        {isLogin ? <h2>Login</h2> : <h2>Register</h2>}
        <form className="form">
          <input
            value={username}
            name="username"
            onChange={e => setUsername(e.target.value.toLowerCase())}
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

          {isLogin ? <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            : <button className="btn btn-primary" onClick={handleRegister}>Register</button>}
        </form>
      </div>

      <div className="col-6">
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
      </div>
    </div>
  );
}

export default Login;
