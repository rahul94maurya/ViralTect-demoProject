import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "demoData",
  initialState: { data: [] },
  reducers: {
    updateData(state, action) {
      state.data = action.payload;
    },
  },
});
export const { updateData } = dataSlice.actions;

export default dataSlice.reducer;
