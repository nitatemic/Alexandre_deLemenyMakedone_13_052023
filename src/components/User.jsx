import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function User() {
  const [data, setData] = useState(null);
  const [isOnEdit, setIsOnEdit] = useState(false);
  const user = useSelector((state) => state.user);



  useEffect(() => {
    setData(user);
  }, [user, data]);

  function handleSave() {
    /* Get values from form */
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    /* Check if values are not empty */
    if (firstName && lastName) {
      /* Save values in state */
      setData({ ...data, firstName, lastName });
      /* Save values in store */
      store.dispatch({
        type: 'UPDATE_USER',
        firstName,
        lastName,
      });
      setIsOnEdit(false);
    }
  }
  function handleEdit() {
    if (isOnEdit) {
      setIsOnEdit(false);
    } else {
      setIsOnEdit(true);
    }
  }
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
        {isOnEdit && (
        <div className="edit-form">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="firstName"
                defaultValue={user.firstName}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="lastName"
                defaultValue={user.lastName}
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSave}>Save</button>
            <button type="button" className="btn btn-primary" onClick={handleEdit}>Cancel</button>
          </form>
        </div>
        )}
        {!isOnEdit && (
        <>
          <h1>
            Welcome back
            <br />
            {data.firstName}
            {' '}
            {data.lastName}
            !
          </h1>
          <button className="edit-button" type="button" onClick={handleEdit}>Edit Name</button>
        </>
        )}
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
