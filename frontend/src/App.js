import Message from "./components/Message";
import Nav from "./components/Nav";
import './App.css';
import React, { useState, useEffect, Component } from "react";
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

// gets all the messages from the DB 
  componentDidMount() {
    API.getMessages(this.state.token)
      .then(res => {
        this.setState({messageList:res.data})
      })
      .then(res2 => {
        this.createUserList();
      })
  }

  // filters through all messages to create another array appropriate for the logged in user
  createUserList = () => {
    let arr = []
    this.state.messageList.forEach((message) => {
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
    this.setState({userMessageList:arr})
  }

  // TO-DO: PASS THIS TO MESSAGES
  deleteBtn = (id) => {
    API.deleteMessage(id, this.props.token)
      .then(res => {
        window.location.reload(false);
      })
      .catch(err => {
        alert("Message could NOT be deleted");
        console.log(err)
      });
  }


  render() {
    return (
      <div className="row">
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
                {(this.state.userMessageList && this.state.userMessageList.length > 0) ?
                  this.state.userMessageList.map((message) => {
                    return (
                      <tr>
                      <td>
                        <p>{this.state.urlPage === "inbox" ? message.sender : message.recipient}</p>
                      </td>
                      <td>
                        <Link to={`/message/${message.id}`} params={{message:message}}>{message.title}</Link>
                        </td>
                      <td>
                      <button className="btn btn-danger" onClick={() => this.deleteBtn(message.id)}>Delete</button>
                      </td>
                    </tr>
                    )
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


export default App;
