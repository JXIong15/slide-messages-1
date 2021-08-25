import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useCookies } from 'react-cookie';

function Message(props) {
  const [recipient, setRecipient] = useState("")
  const [sender, setSender] = useState("")
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [token] = useCookies(['mytoken'])

  console.log(token.mytoken)

  useEffect(() => {
    API.getOneMessage(props.match.params.id, token.mytoken)
      .then(res => {
        console.log(res.data)
        setRecipient(res.data.recipient)
        setSender(res.data.sender)
        setTitle(res.data.title)
        setBody(res.data.body)
      })
      .catch(err => console.log(err))
  })


  return (
    <div>
      <h1>MESSAGE</h1>
      <p>From {sender}</p>
      <p>To {recipient}</p>
      <p>Subject: {title}</p>
      <p>{body}</p>
      <div className="row">
        <div className="col-md-1">
          {/* <button className="btn btn-danger" onClick={() => deleteBtn(props.match.params.id)}>Delete</button> */}
        </div>
      </div>
    </div>
  );
}

export default Message;