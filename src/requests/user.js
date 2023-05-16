const API = 'http://localhost:3001/api/v1';

export default function getUser(token) {
  return fetch(`${API}/user/profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw new Error(res.error);
      }
      if (res.status !== 200) {
        throw new Error(res.message);
      } else {
        return res.body;
      }
    });
}

export function getFirstName(token) {
  return fetch(`${API}/user/profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw new Error(res.error);
      }
      if (res.status !== 200) {
        throw new Error(res.message);
      } else {
        return res.body.firstName;
      }
    });
}

export function updateUserProfile(token, firstName, lastName) {
  try {
    return fetch(`${API}/user/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        firstName,
        lastName,
      }),
    });
  } catch (err) {
    throw new Error(err.message);
  }
}
