import Message from "./components/Message";
import Nav from "./components/Nav";
import './App.css';
import React, { useState, useEffect, Component } from "react";
import { useCookies, Cookies } from 'react-cookie';
import API from "./utils/API";
import { Link } from 'react-router-dom';

class App extends Component {
  state={
    token:this.props.token,
    messageList:[],
    userMessageList:[],
    username:localStorage.getItem("username"),
    urlPage:window.location.pathname.split("/").pop()
  }


  componentDidMount() {
    API.getMessages(this.state.token)
      .then(res => {
        this.setState({messageList:res.data})
        console.log(this.state.messageList)
      })
      .then(res2 => {
        console.log("sexond", this.state.messageList)
        let arr = []
        this.state.messageList.forEach((message) => {
          console.log(message);
          if (this.state.urlPage === "inbox") {
            if (message.recipient === this.state.username) {
              arr.push(message);
            }
          }
          else {
            if (message.sender === this.state.username) {
              arr.push(message);
            }
          }
        })
        console.log("arr", arr)
      })
  }


  // gets all of the messages in the DB
  // useEffect(() => {
  //   API.getMessages(token['mytoken'])
  //     .then(res => { 
  //       // console.log(res.data)
  //       setMessageList(res.data)
  //       // console.log(messageList)
  //     })
  //     .then(res2 => {
  //       // console.log("second")
  //       // console.log(messageList)
  //       let arr = []
  //       // messageList.forEach((message) => {
  //       //   console.log(message);
  //       //   if (urlPage === "inbox") {
  //       //     if (message.recipient === username) {
  //       //       arr.push(message);
  //       //     }
  //       //   }
  //       //   else {
  //       //     if (message.sender === username) {
  //       //       arr.push(message);
  //       //     }
  //       //   }
  //       // })
  //       // console.log(arr)
  //     })
  //     .catch(err => console.log(err))
  // }, [])

  render() {
    return (
      <div className="row">
        {/* navigation */}
        <Nav />
  
        <section className="body-area col-sm-12 col-md-8">
          <div className="inbox">
            <h1>{this.state.urlPage === "inbox" ? "INBOX" : "SENT"}</h1>
  
            <table>
              <thead>
                <tr>
                  <th width="30%">{this.state.urlPage === "inbox" ? "Sender" : "Recipient"}</th>
                  <th>Title</th>
                  <th width="10%">Delete</th>
                </tr>
              </thead>
  
              <tbody>
                {this.state.userMessageList && this.state.userMessageList.length > 0 ?
                  this.state.userMessageList.map((message) => {
                    <tr>
                      <td>
                        <p>{this.state.urlPage === "inbox" ? message.sender : message.recipient}</p>
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
  
}






// function App() {
//   const [token] = useCookies(['mytoken'])
//   const [messageList, setMessageList] = useState([]);
//   const [userMessageList, setUserMessageList] = useState([]);
//   const [username] = useState(localStorage.getItem("username"))
//   const [urlPage] = useState(window.location.pathname.split("/").pop());

//   // gets all of the messages in the DB
//   useEffect(() => {
//     API.getMessages(token['mytoken'])
//       .then(res => { 
//         // console.log(res.data)
//         setMessageList(res.data)
//         // console.log(messageList)
//       })
//       .then(res2 => {
//         // console.log("second")
//         // console.log(messageList)
//         let arr = []
//         // messageList.forEach((message) => {
//         //   console.log(message);
//         //   if (urlPage === "inbox") {
//         //     if (message.recipient === username) {
//         //       arr.push(message);
//         //     }
//         //   }
//         //   else {
//         //     if (message.sender === username) {
//         //       arr.push(message);
//         //     }
//         //   }
//         // })
//         // console.log(arr)
//       })
//       .catch(err => console.log(err))
//   }, [])

//   // useEffect(() => {
//   //   let arr = [];
//   //   console.log("effect")
//   //   console.log(messageList)
//   //   console.log(getAllMessages(token))
//   //   // await setUserMessageList(
//   //       //  messageList.map((message) => {
//   //       //   console.log(message);
//   //       //   console.log("HERE")
//   //       //   if (message.recipient === username) {
//   //       //     arr.push(message);
//   //       //   }
//   //       // })
//   //       // // console.log(arr)
//   //       //   setUserMessageList(arr)

//   //       // console.log(userMessageList)
//   // }, userMessageList)

//   return (
//     <div className="row">
//       {/* navigation */}
//       <Nav />

//       <section className="body-area col-sm-12 col-md-8">
//         <div className="inbox">
//           <h1>{urlPage === "inbox" ? "INBOX" : "SENT"}</h1>

//           <table>
//             <thead>
//               <tr>
//                 <th width="30%">{urlPage === "inbox" ? "Sender" : "Recipient"}</th>
//                 <th>Title</th>
//                 <th width="10%">Delete</th>
//               </tr>
//             </thead>

//             <tbody>
//               {userMessageList && userMessageList.length > 0 ?
//                 userMessageList.map((message) => {
//                   <tr>
//                     <td>
//                       <p>{urlPage === "inbox" ? message.sender : message.recipient}</p>
//                     </td>
//                     <td><p>{message.title}</p></td>
//                     <td>
//                       <button className="btn btn-danger">Delete</button>
//                     </td>
//                   </tr>
//                 }) :
//                 <tr>
//                   <td>
//                   </td>
//                   <td><p>No Messages</p></td>
//                   <td>
//                   </td>
//                 </tr>
//               }
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </div>
//   );
// }

export default App;
