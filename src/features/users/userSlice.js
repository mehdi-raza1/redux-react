import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const user = {
        id: nanoid(),
        userName: action.payload.name,
        userEmail: action.payload.email,
      };
      state.users.push(user);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const user = state.users.findIndex((user) => user.id == id);
         if (user !== -1) {
        state.users[user] = {
            ...state.users[user],
            userName: name,
            userEmail: email
        };}


      //   state.users[user].name = name;
      //   state.users[user].email = email;
    },
    currentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    clearCurrentUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const {
  addUser,
  removeUser,
  updateUser,
  clearCurrentUser,
  currentUser,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
