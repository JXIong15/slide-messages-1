import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Login from './components/Login';
import Inbox from "./components/Inbox";
import Sent from "./components/Sent";
import Message from "./components/Message";
import Compose from "./components/Compose";
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Router() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route exact path="/inbox" component={App} />
        {/* <Route exact path="/messages" component={Message} /> */}
        {/* <Route exact path="/inbox" component={Inbox} /> */}
        {/* <Route exact path="/sent" component={Sent} />
        <Route exact path="/compose" component={Compose} />
        <Route exact path="/error" component={Error} /> */}
      </BrowserRouter>
    </CookiesProvider>
  )
}


ReactDOM.render(
  <React.StrictMode>

<Header />
    <Router />

    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
