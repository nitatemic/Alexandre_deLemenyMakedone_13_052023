import React from 'react';

export default function ErrorPage(props) {
  const { code, message } = props;

  return (
    <main className="main bg-dark">
        <div className="error">
          <div className="error-content">
            {code && (<h2>{code}</h2>)}
            {!code && (<h2>404</h2>)}
            {message && (<p>{message}</p>)}
            {!message && (<p>Page not found</p>)}
          </div>
        </div>
    </main>
  );
}
