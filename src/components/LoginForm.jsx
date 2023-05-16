import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import getToken from '../requests/login';
import {setUser} from '../store';
import getUser from '../requests/user';

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      } else {
        /* Cookie that expires on closing the browser */
        document.cookie = `Bearer=${token}; path=/;`;
      }
      const data = await getUser(token);
      dispatch(setUser(data));
      navigate('/profile');
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
        <button className="sign-in-button" id="sing-in-submit" type="submit" onClick={handleLogin}>Sign In</button>
      </form>
    </section>
  );
}
