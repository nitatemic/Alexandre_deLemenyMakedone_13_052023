import React from 'react';
import { Link } from 'react-router-dom';
import getToken from '../requests/login.js';

export default function LoginForm() {
  async function handleLogin() {
    /* Prevent the form from being submitted */
    event.preventDefault();
    /* Get values from <input> elements */
    /* Get email */
    const email = document.getElementById('username').value;
    /* Get password */
    const password = document.getElementById('password').value;
    /* Get the checkbox */
    const rememberMe = document.getElementById('remember-me').checked;

    /* Fetch to the API */
    try {
      const token = await getToken(email, password);
      /* If the checkbox is checked, save the token in localStorage */
      if (rememberMe) {
        /* Cookie expires in 12 hours */
        document.cookie = `Bearer=${token}; max-age=${720 * 60}; path=/;`;
        window.location.href = '/user';
      } else {
        /* Cookie that expires on closing the browser */
        document.cookie = `Bearer=${token}; path=/;`;
        window.location.href = '/user';
      }
    } catch (error) {
      console.log(error);
      /* TODO : Display error message */
    }
  }

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon" />
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">
            Username
          </label
          >
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">
            Password
          </label
          >
          <input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">
            Remember me
          </label
          >
        </div>
        {/* PLACEHOLDER DUE TO STATIC SITE */}
        <Link to="/user">
          <p className="sign-in-button">Sign In</p>
        </Link>
        <button className="sign-in-button" id="sing-in-submit" type="submit" onClick={handleLogin}>Sign In</button>
      </form>
    </section>
  );
}
