// src/components/Header.jsx
import React from "react";
import Button from './Button.jsx'
import {Link, useNavigate} from 'react-router-dom'
import {AuthContext} from '../AuthProvider.jsx';
import { Navigate } from "react-router-dom";

function Header() {
  const {isLoggedIn, setIsLoggedIn} = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    
    setIsLoggedIn(false);
    navigate('/')
    

  }
  return (
    <>
      <nav className = 'navbar container pt-3 pb-3 rounded'>
        <Link className = 'navbar-brand text-light' to = "/"> Stock Prediction Portal </Link>
        <div>
          {isLoggedIn ? (
            <button className = 'btn btn-danger' onClick = {handleLogout}> Logout </button>
          ): (<>
           <Button href = '/login' text = 'Login' filled = {false} />
          &nbsp;
          <Button href = '/register' text = 'Register' filled = {true} />
          </>)}
        
        </div>
      </nav>
    </>
  );
}

export default Header;
