import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
  return (
      <section className="nav col-sm-12 col-md-2">
        <Link to="/compose" className="compose"><span>Compose</span></Link>
        <Link to="/inbox">Inbox</Link>
        <Link to="/sent">Sent</Link>
      </section>
  );
}

export default Nav;
