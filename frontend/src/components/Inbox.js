import React from "react";

function Inbox(props) {
  console.log(props.messageList)
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
          <tr>
            <td>
              <p>Henry</p>
            </td>
            <td><p>Title</p></td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Inbox;