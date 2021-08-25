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

// gets all the messages from the DB and filters through it to create another array appropriate for the logged in user
  componentDidMount() {
    API.getMessages(this.state.token)
      .then(res => {
        this.setState({messageList:res.data})
      })
      .then(res2 => {
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
      })
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
                    console.log(message.sender);
                    console.log(this.state.urlPage === "inbox");
                    return (
                      <tr>
                      <td>
                        <p>{this.state.urlPage === "inbox" ? message.sender : message.recipient}</p>
                      </td>
                      <td>
                        <p>{message.title}</p>
                        </td>
                      <td>
                        <button className="btn btn-danger">Delete</button>
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
