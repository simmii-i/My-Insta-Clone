import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    commentSections: {},
  },
  reducers: {
    toggleCommentSection: (state, action) => {
      const postId = action.payload;
      state.commentSections[postId] = !state.commentSections[postId];
    },
  },
});

export const { toggleCommentSection } = postSlice.actions;
export default postSlice.reducer;
