import { configureStore, createSlice } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const API = 'http://localhost:3001/api/v1';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    loading: false,
    error: null,
  },

  reducers: {
    fetchUserRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess: (state, action) => {
      const { email, firstName, lastName } = action.payload;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.loading = false;
      state.error = null;
    },
    fetchUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateUserRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateUserSuccess: (state, action) => {
      const { firstName, lastName } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { user: userSlice.reducer },
  middleware: [thunk],
});

export const {
  fetchUserRequest, fetchUserSuccess, fetchUserFailure,
  updateUserRequest, updateUserSuccess, updateUserFailure,
} = userSlice.actions;

export const updateUser = (token, firstName, lastName) => async (dispatch) => {
  dispatch(updateUserRequest());

  return fetch(`${API}/user/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ firstName, lastName }),
  })
    .then((res) => res.json())
    .then(
      (res) => {
        if (res.status === 200) {
          dispatch(updateUserSuccess(res.body));
        } else {
          dispatch(updateUserFailure(res.message));
        }
      },
    );
};
export default store;
