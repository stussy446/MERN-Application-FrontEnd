//Navigate from page to page

import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav className="App-nav">
        <Link to="/">Home</Link>
        <Link to="../blog">Blog</Link>
        <Link to="../contact">Contact</Link>
    </nav>
  );
}

export default Nav;
