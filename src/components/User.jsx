import React, { useEffect, useState } from 'react';
import getUser from '../requests/user';
import getBearerCookie from '../tools/getBearerCookie';

export default function User() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loading() {
      /* Get the Bearer cookie */
      const token = getBearerCookie();
      if (token === null) {
        /* Redirect to login */
        window.location.href = '/login';
      }
      try {
        /* Fetch to the API */
        const userData = await getUser(token);
        setData(userData);
      } catch (err) {
        /* Delete the cookie */
        document.cookie = 'Bearer=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        /* Redirect to login */
        window.location.href = '/login';
      }
    }

    loading();
  }, []);

  if (!data) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {data.firstName}
          {' '}
          {data.lastName}
          !
        </h1>
        <button className="edit-button" type="button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button" type="button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button" type="button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button" type="button">View transactions</button>
        </div>
      </section>
    </main>
  );
}
