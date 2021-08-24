import React from "react";

function Message(props) {
  const deleteBtn = (message) => {
    deleteBtn(message)
    console.log(message)
  }

  console.log(props)
  return (
    <div>
      <h1>MESSAGE</h1>
      {props.messages && props.messages.map(message => {
        console.log(message)
        return (
          <div key={message.id}>
            <p>{message.sender}</p>
            <p>{message.title}</p>

            <div className="row">
              <div className = "col-md-1">
                <button className = "btn btn-danger">Delete</button>
              </div>
              </div>

          </div>
          )
      })}
    </div>
  );
}

export default Message;