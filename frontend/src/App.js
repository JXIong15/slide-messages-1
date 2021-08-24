import Header from "./components/Header";
import Login from "./components/Login";
import Inbox from "./components/Inbox";
import Sent from "./components/Sent";
import Message from "./components/Message";
import Compose from "./components/Compose";
import Error from "./components/Error";
import Footer from "./components/Footer";
import './App.css';

function App() {
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
    </div>
  );
}

export default App;
