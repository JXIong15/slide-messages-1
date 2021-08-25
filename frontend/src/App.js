import Header from "./components/Header";
import Inbox from "./components/Inbox";
import Sent from "./components/Sent";
import Message from "./components/Message";
import Compose from "./components/Compose";
import Error from "./components/Error";
import './App.css';
import React, { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import API from "./utils/API";
import { Link } from 'react-router-dom';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [token] = useCookies(['mytoken'])

  // gets all of the messages in the DB
  useEffect(() => {
    API.getMessages(token['mytoken'])
      .then(res => setMessageList(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="row">
      {/* navigation */}
      <section className="nav col-sm-12 col-md-2">
        <Link to="/compose" className="compose"><span>Compose</span></Link>
        <Link to="/inbox">Inbox</Link>
        <Link to="/sent">Sent</Link>
      </section>

      <section className="body-area col-sm-12 col-md-8">
        <Inbox messageList={messageList}/>
      </section>


    </div>
  );
}

export default App;
