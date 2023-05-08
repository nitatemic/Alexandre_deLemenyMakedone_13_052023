import React, { useEffect } from 'react';
import LoginForm from './LoginForm';

export default function Login() {
  useEffect(() => {
    async function loading() {
      /* Get the cookie */
      const { cookie } = document;
      /* If the cookie is set, redirect to profile */
      if (cookie) {
        window.location.href = '/profile';
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
