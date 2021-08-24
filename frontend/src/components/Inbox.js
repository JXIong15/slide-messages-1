import React from "react";

function Inbox(props) {
  console.log(props.messageList)
  return (
    <div>
      <h1>INBOX</h1>

      <table>
        <thead>
          <tr>
            <th>Sender</th>
            <th>
              {/* ON CLICK: VIEW EMAIL */}
              {/* <span onClick={() => props.sortBy("email")}> */}
              Title
              {/* </span> */}
            </th>
            <th>Delete</th>
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