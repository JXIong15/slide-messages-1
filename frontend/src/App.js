import Header from "./components/Header";
import Body from "./components/Body";
// import Message from "./components/Message";
// import Compose from "./components/Compose";
// import Error from "./components/Error";
import Footer from "./components/Footer";
import './App.css';

function App() {

  return (
    <div>
      <Header />
      <Body />

      {/* <Message messageList={messageList} /> */}
      {/* <Compose />
      <Error /> */}
      <Footer />

      {/* <div className = "row">
        <div className="col">
        <button className = "btn btn-primary" onClick = {messageForm()}>New Message</button>
        </div>
      </div> */}


    </div>

  );
}

export default App;
