import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayType: "index",
  cafeId: null,
  location: ""
};

const cafesDisplaySlice = createSlice({
  name: "cafesDisplay",
  initialState,
  reducers: {
    setCafe(state, { payload }) {
      const { location } = payload;
      state.location = location;
    },
    setDisplayType(state, { payload }) {
      const { displayType, cafeId = null } = payload;
      state.cafeId = cafeId;
      state.displayType = displayType;
    }
  }
});

export const { setCafe, setDisplayType } = cafesDisplaySlice.actions;

export default cafesDisplaySlice.reducer;
