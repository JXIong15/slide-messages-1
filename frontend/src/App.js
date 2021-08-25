import Message from "./components/Message";
import Compose from "./components/Compose";
import Nav from "./components/Nav";
import './App.css';
import React, { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import API from "./utils/API";
import { Link } from 'react-router-dom';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [userMessageList, setUserMessageList] = useState([]);
  const [username] = useState(localStorage.getItem("username"))
  const [urlPage] = useState(window.location.pathname.split("/").pop());
  const [token] = useCookies(['mytoken'])

  // gets all of the messages in the DB
  useEffect(() => {
    console.log(urlPage)
    API.getMessages(token['mytoken'])
      .then(res => setMessageList(res.data))
      .catch(err => console.log(err))
  }, [])

  // useEffect(() => {
  //   let arr = [];
  //   console.log("effect")
  //   console.log(props.messageList)
  //   // await setUserMessageList(
  //        props.messageList.map((message) => {
  //         console.log(message);
  //         console.log("HERE")
  //         if (message.recipient === username) {
  //           arr.push(message);
  //         }
  //       })
  //       // console.log(arr)
  //         setUserMessageList(arr)

  //       // console.log(userMessageList)
  // }, userMessageList)

  return (
    <div className="row">
      {/* navigation */}
      <Nav />

      <section className="body-area col-sm-12 col-md-8">
      <div className="inbox">
      <h1>{urlPage === "inbox" ? "INBOX" : "SENT"}</h1>

      <table>
        <thead>
          <tr>
            <th width="30%">{urlPage === "inbox" ? "Sender" : "Recipient"}</th>
            <th>Title</th>
            <th width="10%">Delete</th>
          </tr>
        </thead>

        <tbody>
          {userMessageList && userMessageList.length > 0 ?
            userMessageList.map((message) => {
              <tr>
                <td>
                  <p>{urlPage === "inbox" ? message.sender : message.recipient}</p>
                </td>
                <td><p>{message.title}</p></td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            }) :
            <tr>
              <td>
              </td>
              <td><p>No Messages</p></td>
              <td>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
      </section>
    </div>
  );
}

export default App;
