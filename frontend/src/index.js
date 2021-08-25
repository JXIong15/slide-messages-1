import reportWebVitals from './reportWebVitals';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { CookiesProvider, useCookies } from 'react-cookie';
import Login from './components/Login/Login';
import Message from "./components/Message/Message";
import Compose from "./components/Compose/Compose";
import Error from "./components/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import API from "./utils/API";
import App from './App';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Router() {
  const [token] = useCookies(['mytoken'])
  const [urlPage] = useState(window.location.pathname.split("/").pop())

  // after message is deleted, page is reloaded to indicate that
  // if user is viewing an individual message and deletes it, the user is then brought to the previous page
  const deleteBtn = (id) => {
    API.deleteMessage(id, token.mytoken)
      .then(res => {
        if (urlPage === "inbox" || urlPage === "sent") {
          window.location.reload(false);
        }
        else {
          console.log("ERROR")
        //   window.history.back();
        }
      })
      .catch(err => {
        console.log(err)
      });
  }

  return (
    <CookiesProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route key="inbox" exact path="/inbox">
            <App 
              token={token.mytoken} 
              deleteBtn={deleteBtn}
              />
          </Route>
          <Route key="sent" exact path="/sent">
            <App 
              token={token.mytoken} 
              deleteBtn={deleteBtn}
            />
          </Route>
          <Route exact path="/message/:id">
            <Message
              token={token.mytoken} 
              deleteBtn={deleteBtn}
            />
          </Route>
          <Route exact path="/compose">
            <Compose token={token.mytoken} />
          </Route> 
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