import React, { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import API from "../../utils/API";
import "./message.css"

function Message(props) {
  const [recipient, setRecipient] = useState("")
  const [sender, setSender] = useState("")
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [token] = useCookies(['mytoken'])
  const [id] = useState(window.location.href.split('/').pop())

  // Gets the specified message
  useEffect(() => {
    API.getOneMessage(id, token.mytoken)
      .then(res => {
        setRecipient(res.data.recipient)
        setSender(res.data.sender)
        setTitle(res.data.title)
        setBody(res.data.body)
      })
      .catch(err => console.log(err))
  })

  return (
    <div className="row">
      <Header />
      <Nav />

      <div className="body-area col-sm-12 col-md-8">
        <h1 className="m-h1">MESSAGE</h1>

        <div className="message">
          <div className="message-top row">
          <div className="message-head col-md-3">
            <p><span>From: </span> {sender}</p>
            <p><span>To: </span> {recipient}</p>
          </div>
          <h3 className="col-md-7 message-title">{title}</h3>
          <button className="btn btn-danger col-md-1" onClick={() => props.deleteBtn(id)}>Delete</button>
          </div>

          <p className="message-body">{body}</p>
          <div className="row">
            <div className="col-md-1">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;