import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  users: [
    {
      id: 1,
      name: 'John Doe',
      surname:'black',
      age:'22',
      address:'1234st.',
      email:'john@example',
      phone:'123',
      profileImage:'http',
      gender:'male',
    },
    {
      id: 2,
      name: 'Kent ',
      surname:'Clark',
      age:'22',
      address:'1234st.',
      email:'clark@example',
      phone:'123',
      profileImage:'http',
      gender:'male',
    }
  ],
 
};

const userSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    addNewUser: state => {
      state.users = [...state.users, action.payload];
    },
  },
});

export const {addNewUser} = userSlice.actions;

export default userSlice.reducer;
