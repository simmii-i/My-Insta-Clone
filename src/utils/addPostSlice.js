import { createSlice } from "@reduxjs/toolkit";

const addPostSlice = createSlice({
  name: "filePreview",
  initialState: [],
  reducers: {
    setFilePreview: (state, action) => {
      state.unshift(action.payload);
    },
    clearFilePreview: (state) => {
      return [];
    },
  },
});

export const { setFilePreview, clearFilePreview } = addPostSlice.actions;
export default addPostSlice.reducer;
