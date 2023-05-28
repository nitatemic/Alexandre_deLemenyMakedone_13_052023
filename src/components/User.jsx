import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../store.js';

export default function User() {
  const [data, setData] = useState(null);
  const [isOnEdit, setIsOnEdit] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const token = document.cookie.split('=')[1];

  useEffect(() => {
    setData(user);
  }, [user]);

  function handleSave() {
    /* Get values from form */
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    /* Check if values are not empty */
    if (firstName && lastName) {
      /* Save values in state */
      dispatch(updateUser(token, firstName, lastName));
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
          <>
            <h1>Welcome back</h1>
            <div className="edit-form">
              <form className="edit-form-form">
                <div className="form-group-inputs">
                  <div className="form-group-inputs-item">
                    <input
                      type="text"
                      className="form-group-inputs-item-input"
                      id="firstName"
                      placeholder={user.firstName}
                    />
                  </div>
                  <div className="form-group-inputs-item">
                    <input
                      type="text"
                      className="form-group-inputs-item-input"
                      id="lastName"
                      placeholder={user.lastName}
                    />
                  </div>
                </div>
                <div className="form-group-buttons">
                  <button type="submit" className="btn btn-primary form-group-buttons-item" onClick={handleSave}>Save</button>
                  <button type="button" className="btn btn-primary form-group-buttons-item" onClick={handleEdit}>Cancel</button>
                </div>
              </form>
            </div>
          </>
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
