import { createSlice } from "@reduxjs/toolkit";

import { getCafes } from "../../api/api";

const initialState = {
  cafes: [],
  cafesById: {},
  isLoading: false,
  error: null
};

function startFetch(state) {
  state.isLoading = true;
}

function failedFetch(state, { payload }) {
  state.isLoading = false;
  state.error = payload;
}

const cafesSlice = createSlice({
  name: "cafes",
  initialState,
  reducers: {
    getCafeStart: startFetch,
    getCafesStart: startFetch,
    getCafeSuccess(state, { payload }) {
      const { id } = payload;
      state.isLoading = false;
      state.cafesById[id] = payload;
      state.error = null;
    },
    getCafesSuccess(state, { payload }) {
      const { cafes } = payload;
      state.isLoading = false;
      state.error = null;
      state.cafes = cafes;

      for (const cafe of cafes) {
        state.cafesById[cafe.id] = cafe;
      }
    },
    getCafeFailure: failedFetch,
    getCafesFailure: failedFetch
  }
});

// Export action creators
export const {
  getCafeStart,
  getCafesStart,
  getCafeSuccess,
  getCafesSuccess,
  getCafeFailure,
  getCafesFailure
} = cafesSlice.actions;

// Export reducer
export default cafesSlice.reducer;

// Thunk that fetches the list of cafes
export const fetchCafes = location => async dispatch => {
  try {
    dispatch(getCafesStart());
    const cafes = await getCafes(location);
    dispatch(getCafesSuccess(cafes));
  } catch (error) {
    dispatch(getCafesFailure);
  }
};
