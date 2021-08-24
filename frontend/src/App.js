import Header from "./components/Header";
import Inbox from "./components/Inbox";
import Sent from "./components/Sent";
import Message from "./components/Message";
import Compose from "./components/Compose";
import Error from "./components/Error";
import './App.css';
import React, { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import API from "./utils/API";

function App() {
  const [messageList, setMessageList] = useState([]);
  const [token, setToken, removeToken] = useCookies(['mytoken'])
  let history = useHistory()

  useEffect(() => {
    if (!token['mytoken']) {
      history.push('/')
    }
  }, [token])

  const logoutBtn = () => {
    removeToken(['mytoken'])
    setToken('mytoken', "")
  }

  // gets all of the messages in the DB
  useEffect(() => {
    API.getMessages(token['mytoken'])
      .then(res => setMessageList(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <button onClick={logoutBtn} className="btn btn-primary">Logout</button>
      <Inbox messageList={messageList}/>

    </div>
  );
}

export default App;
