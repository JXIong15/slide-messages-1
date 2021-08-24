import React from "react";
import API from "../utils/API";

function Message(props) {
  
  const deleteBtn = (id) => {
    API.deleteMessage(id)
      .then(res => {
        alert("Message Deleted")
        // NEED TO REFRESH TO SHOW IT WAS DELETED
        // OR USE API CALL
      })
      .catch(err => {
        alert("Message could NOT be deleted");
        console.log(err)
      });
  }


  return (
    <div>
      <h1>MESSAGE</h1>
      {props.messageList && props.messageList.map(message => {
        return (
          <div key={message.id}>
            <p>{message.sender}</p>
            <p>{message.title}</p>

            <div className="row">
              <div className="col-md-1">
                <button className="btn btn-danger" onClick={() => deleteBtn(message.id)}>Delete</button>
              </div>
            </div>

          </div>
        )
      })}
    </div>
  );
}

export default Message;