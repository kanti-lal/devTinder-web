import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "Feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => action.payload,
    removeFeed: (state, action) => {
      const newArray = state.filter((feed) => feed._id !== action.payload);
      return newArray;
    },
  },
});

export const { addFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;
