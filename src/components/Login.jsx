import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import LoginForm from './LoginForm';

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    async function loading() {
      /* Get the cookie */
      const { cookie } = document;
      /* If the cookie is set, redirect to profile */
      if (cookie) {
        navigate('/profile');
      }
    }
    loading();
  }, []);

  return (
    <main className="main bg-dark">
      <LoginForm />
    </main>
  );
}
