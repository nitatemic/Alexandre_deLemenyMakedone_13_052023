import {configureStore, createSlice,} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
  },
  reducers: {
    setUser: (state, action) => {
      const {email, firstName, lastName} = action.payload;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
    },
    updateName: (state, action) => {
      const {firstName, lastName} = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
    },
  },
});


const store = configureStore({
  reducer: userSlice.reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export const { setUser, updateName } = userSlice.actions;
export default store;
