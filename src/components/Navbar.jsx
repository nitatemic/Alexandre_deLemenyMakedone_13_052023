import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import argentBankLogo from '../assets/img/argentBankLogo.png';
import { fetchUser } from '../requests/user';

export default function Navbar() {
  const auth = document.cookie.indexOf('Bearer') !== -1;
  const token = document.cookie.split('=')[1];
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('My profile');
  const user = useSelector((state) => state.user);
  if (auth && (user.firstName === '')) {
    dispatch(fetchUser(token));
  }

  useEffect(() => {
    setFirstName(user.firstName);
  }, [user, firstName, auth, dispatch, token]);

  function handleLogout() {
    document.cookie = 'Bearer=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = '/';
  }
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
          <a className="main-nav-item" onClick={handleLogout}>
            <i className="fa fa-sign-out" />
            Sign Out
          </a>
        </div>
      )}
      {!auth && (
        <div>
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle" />
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}
