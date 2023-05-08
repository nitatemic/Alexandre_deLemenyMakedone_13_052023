const API = 'http://localhost:3001/api/v1';

export default function getToken(email, password) {
  return fetch(`${API}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw new Error(res.error);
      }
      return res.body.token;
    });
}
