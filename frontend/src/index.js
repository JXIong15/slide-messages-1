import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Login from './components/Login';
import Message from "./components/Message";
import Compose from "./components/Compose";
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Router() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Header />
        <Switch>

        <Route exact path="/" component={Login} />
        <Route key="inbox" exact path="/inbox" component={App} />
        {/* <Route exact path="/messages" component={Message} /> */}
        {/* <Route exact path="/inbox" component={Inbox} /> */}
        <Route key="sent" exact path="/sent" component={App} /> 
        <Route exact path="/compose" component={Compose} />
        
        <Route path="*" component={Error} />

        </Switch>
        <Footer />
      </BrowserRouter>
    </CookiesProvider>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
