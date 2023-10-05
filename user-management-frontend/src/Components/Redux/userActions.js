import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    setUsers: (state, action) => {
      return action.payload;
    },
    addUser: (state, action) => {
     
      if (isValidUserData(action.payload)) {
        state.push(action.payload);
      } else {
        
        console.error('Invalid user data:', action.payload);
      }
    },
    updateUser: (state, action) => {
     
      if (isValidUserData(action.payload)) {
        const updatedUserIndex = state.findIndex((user) => user.id === action.payload.id);
        if (updatedUserIndex !== -1) {
          state[updatedUserIndex] = action.payload;
        }
      } else {
       
        console.error('Invalid user data:', action.payload);
      }
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});


function isValidUserData(user) {
 
  if (user.first_name && user.last_name && user.dob && user.address) {
    return true;
  }
  return false;
}

export const { setUsers, addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
