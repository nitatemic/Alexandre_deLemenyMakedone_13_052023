import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import argentBankLogo from '../assets/img/argentBankLogo.png';
import { getFirstName } from '../requests/user';

export default function Navbar() {
  const auth = document.cookie.indexOf('Bearer') !== -1;
  const token = document.cookie.split('=')[1];

  const [firstName, setFirstName] = useState('My profile');

  useEffect(() => {
    async function name() {
      if (auth) {
        setFirstName(await getFirstName(token));
      }
    }
    name();
  }, [auth, token]);

  return (
    <nav className="main-nav">
      <Link to="./" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {auth && (
        <div>
          <Link to="/profile" className="main-nav-item">
            <i className="fa fa-user-circle" />
            {firstName}
          </Link>
        </div>
      )}
      {!auth && (
        <div>
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"/>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}
