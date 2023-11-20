import { configureStore } from "@reduxjs/toolkit";
import addPostSlice from "./addPostSlice";
import commentSlice from "./commentSlice";
import postsSlice from "./postsSlice";

const store = configureStore({
  reducer: {
    filePreview: addPostSlice,
    comments: commentSlice,
    posts: postsSlice,
  },
});

export default store;
