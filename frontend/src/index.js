import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter, Switch, Redirect, useHistory } from 'react-router-dom';
import { CookiesProvider, useCookies } from 'react-cookie';
import Login from './components/Login';
import Message from "./components/Message";
import Compose from "./components/Compose";
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import API from "./utils/API";


function Router() {
  const [token] = useCookies(['mytoken'])
  const [urlPage] = useState(window.location.pathname.split("/").pop())
  let history = useHistory();

  const deleteBtn = (id) => {
    API.deleteMessage(id, token.mytoken)
      .then(res => {
        console.log(urlPage === "inbox")
        console.log(urlPage)
        if (urlPage === "inbox" || urlPage === "sent") {
          window.location.reload(false);
        }
        else {
          console.log("HERE")
          window.history.back();
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
          {/* <Route exact path="/inbox" component={Inbox} /> */}
          
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
