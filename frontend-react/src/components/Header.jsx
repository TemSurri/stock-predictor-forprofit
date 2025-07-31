// src/components/Header.jsx
import React from "react";
import Button from './Button.jsx'


function Header() {
  return (
    <>
      <nav className = 'navbar container pt-3 pb-3 rounded'>
        <a className = 'navbar-brand text-light' href = ""> Stock Prediction Portal </a>
        <div>
          <Button href = '' text = 'Login' filled = {false} />
          &nbsp;
          <Button href = '' text = 'Register' filled = {true} />

        </div>
      </nav>
    </>
  );
}

export default Header;
