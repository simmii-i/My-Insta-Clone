import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comments",
  initialState: {},
  reducers: {
    addComment: (state, action) => {
      const { postId, comment } = action.payload;
      if (!state[postId]) {
        state[postId] = [];
      }
      state[postId].push(comment);
    },
  },
});

export const { addComment } = commentSlice.actions;
export const selectComments = (state, postId) => state.comments[postId] || [];
export default commentSlice.reducer;
