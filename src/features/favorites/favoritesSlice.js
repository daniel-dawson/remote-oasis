import { createSlice } from "@reduxjs/toolkit";
import { getFavorites } from "../../api/api";

const initialState = {
  favorites: [],
  favoritesById: {},
  isLoading: false,
  error: null
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    getFavoritesStart(state) {
      state.isLoading = true;
    },
    getFavoritesSuccess(state, { payload }) {
      const { favorites } = payload;
      state.isLoading = false;
      state.error = null;
      state.favorites = favorites;

      for (const favorite of favorites) {
        state.favoritesById[favorite.id] = favorite;
      }
    },
    getFavoritesFailure(state, { payload }) {
      state.isLoading = false;
      const { error } = payload;
      state.error = error.message;
    }
  }
});

// Export action creators
export const {
  getFavoritesStart,
  getFavoritesSuccess,
  getFavoritesFailure
} = favoritesSlice.actions;

// Export reducer
export default favoritesSlice.reducer;

// Thunk that fetches the list of favorites
export const fetchFavorites = () => async dispatch => {
  try {
    dispatch(getFavoritesStart());
    const favorites = await getFavorites();
    console.log("TCL: favorites", favorites);

    dispatch(getFavoritesSuccess(favorites));
  } catch (error) {
    dispatch(getFavoritesFailure({ error: error.message }));
  }
};
