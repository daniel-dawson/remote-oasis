import { combineReducers } from "@reduxjs/toolkit";

import cafesDisplayReducer from "../features/displayCafes/cafesDisplaySlice";
import cafesListReducer from "../features/cafesList/cafesSlice";

const rootReducer = combineReducers({
  cafesDisplay: cafesDisplayReducer,
  cafes: cafesListReducer
});

export default rootReducer;
