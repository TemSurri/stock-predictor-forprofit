// src/components/Header.jsx
import React from "react";
import Button from './Button.jsx'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
      <nav className = 'navbar container pt-3 pb-3 rounded'>
        <Link className = 'navbar-brand text-light' to = "/"> Stock Prediction Portal </Link>
        <div>
          <Button href = '/login' text = 'Login' filled = {false} />
          &nbsp;
          <Button href = '/register' text = 'Register' filled = {true} />

        </div>
      </nav>
    </>
  );
}

export default Header;
