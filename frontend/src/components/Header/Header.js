import React, { useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import "./header.css";

function Header() {
  const [token, setToken, removeToken] = useCookies(['mytoken'])
  let history = useHistory()

  useEffect(() => {
    if (!token['mytoken']) {
      history.push('/')
    }
  }, [token])

  const logoutBtn = () => {
    removeToken(['mytoken'])
    setToken('mytoken', "")
  }
  return (
    <header>
      <div>
        <h1>
          <Link to="/inbox">
            SliDeMy
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots-fill" viewBox="0 0 16 16">
              <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          </Link>
        </h1>
        <button onClick={logoutBtn} className="btn btn-primary">Logout</button>

      </div>
    </header>
  );
}

export default Header;