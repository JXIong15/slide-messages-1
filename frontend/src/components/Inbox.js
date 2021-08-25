import React, { useState, useEffect } from "react";

function Inbox(props) {
  const [userMessageList, setUserMessageList] = useState([]);
  const [username] = useState(localStorage.getItem("username"))
  console.log(props.messageList)

  useEffect(() => {
    let arr = [];
    console.log("effect")
    console.log(props.messageList)
    // await setUserMessageList(
         props.messageList.map((message) => {
          console.log(message);
          console.log("HERE")
          if (message.recipient === username) {
            arr.push(message);
          }
        })
        // console.log(arr)
          setUserMessageList(arr)

        // console.log(userMessageList)
  }, userMessageList)




  return (
    <div className="inbox">
      <h1>INBOX</h1>

      <table>
        <thead>
          <tr>
            <th width="30%">Sender</th>
            <th>Title</th>
            <th width="10%">Delete</th>
          </tr>
        </thead>

        <tbody>
          {userMessageList && userMessageList.length > 0 ?
            userMessageList.map((message) => {
              <tr>
                <td>
                  <p>{message.sender}</p>
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
  );
}

export default Inbox;