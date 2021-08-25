import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useCookies } from 'react-cookie';

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
    <div>
      <h1 className="m-h1">MESSAGE</h1>

      <div className="message">
        <div className="message-head">
          <p><span>From: </span> {sender}</p>
          <p><span>To: </span> {recipient}</p>
          <p><span>Subject: </span> {title}</p>
        </div>
        <button className="btn btn-danger" onClick={() => props.deleteBtn(id)}>Delete</button>
        <p className="message-body">{body}</p>
        <div className="row">
          <div className="col-md-1">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;