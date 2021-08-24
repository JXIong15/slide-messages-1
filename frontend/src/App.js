import Header from "./components/Header";
import Login from "./components/Login";
import Inbox from "./components/Inbox";
import Sent from "./components/Sent";
import Message from "./components/Message";
import Compose from "./components/Compose";
import Error from "./components/Error";
import Footer from "./components/Footer";
import './App.css';

import {useState, useEffect} from 'react'

function App() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/messages/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization': 'Token 9a0ed95a8ee8b82d096d3f6ba4ad07575e08ebbe'
      }
    })
    .then(resp => resp.json())
    .then(resp => setMessages(resp))
    .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <Header />
      <Login />
      <Inbox />
      <Sent />
      <Message />
      <Compose />
      <Error />
      <Footer />

      {messages.map(message => {
        return <h2>{message.title}</h2>
      })}
    </div>
  );
}

export default App;
