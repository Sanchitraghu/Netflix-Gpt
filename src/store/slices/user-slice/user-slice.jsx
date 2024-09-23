import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { userDetails: null },
  reducers: {
    addUserToStore: (state, action) => {
      state.userDetails = action.payload;
    },
    removeUserFromStore: (state) => {
      state.userDetails = null;
    },
  },
});

export const { addUserToStore, removeUserFromStore } = userSlice.actions;

export default userSlice.reducer;
