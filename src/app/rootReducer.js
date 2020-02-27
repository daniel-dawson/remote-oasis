import { combineReducers } from "@reduxjs/toolkit";

import cafesDisplayReducer from "../features/displayCafes/cafesDisplaySlice";
import cafesListReducer from "../features/cafesList/cafesSlice";
import favoritesReducer from "../features/favorites/favorites";

const rootReducer = combineReducers({
  cafesDisplay: cafesDisplayReducer,
  cafes: cafesListReducer,
  favorites: favoritesReducer
});

export default rootReducer;
