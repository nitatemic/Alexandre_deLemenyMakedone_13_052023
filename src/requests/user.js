import {fetchUserFailure, fetchUserRequest, fetchUserSuccess} from '../store';

const API = 'http://localhost:3001/api/v1';

export const fetchUser = (token) => async (dispatch) => {
  try {
    dispatch(fetchUserRequest());

    const response = await fetch(`${API}/user/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (response.status !== 200) {
      throw new Error(data.message);
    }

    dispatch(fetchUserSuccess(data.body)); // Succès de l'appel API
  } catch (error) {
    dispatch(fetchUserFailure(error.message)); // Erreur de l'appel API
  }
};

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
