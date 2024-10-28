import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { userDetails: null, subscriptionExpiresOn: null },
  reducers: {
    addUserToStore: (state, action) => {
      state.userDetails = action.payload;
    },
    removeUserFromStore: (state) => {
      state.userDetails = null;
    },
    addSubscriptionExpiresOn: (state, action) => {
      state.subscriptionExpiresOn = action.payload;
    },
  },
});

export const { addUserToStore, removeUserFromStore, addSubscriptionExpiresOn } =
  userSlice.actions;

export default userSlice.reducer;
