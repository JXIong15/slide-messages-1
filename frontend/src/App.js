import Header from "./components/Header";
import Login from "./components/Login";
import Inbox from "./components/Inbox";
import Sent from "./components/Sent";
import Message from "./components/Message";
import Compose from "./components/Compose";
import Error from "./components/Error";
import Footer from "./components/Footer";
import './App.css';
import API from "./utils/API";
import React, {useState} from "react";

function App() {
  
  const {messageList, setMessageList} = useState([])

  API.getMessages()
  .then(res => {
    console.log(res)
    setMessageList(res.data)
  })
  .catch(err => console.log(err));

  const messageForm = () => {
    // setNewMessage({sender:'', recipient:'', title:'', body:''})
    console.log("message form")
  }

  return (
    <div>
      {/* <Header /> */}
      {/* <Login />
      <Inbox />
      <Sent /> */}
      <Message messageList = {messageList}/>
      {/* <Compose />
      <Error /> */}
      {/* <Footer /> */}

      {/* <div className = "row">
        <div className="col">
        <button className = "btn btn-primary" onClick = {messageForm()}>New Message</button>
        </div>
      </div> */}
      
      
    </div>
    
  );
}

export default App;
