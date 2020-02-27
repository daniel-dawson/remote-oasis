// Actions
export const FETCH_FAVORITES_START = "favorites/fetchStart";
export const FETCH_FAVORITES_SUCCESS = "favorites/fetchSuccess";
export const FETCH_FAVORITES_FAILURE = "favorites/fetchFailure";
export const START_POLLING_FAVORITES = "favorites/startPolling";
export const STOP_POLLING_FAVORITES = "favorites/stopPolling";
export const POST_FAVORITES_START = "favorites/postStart";
export const POST_FAVORITES_SUCCESS = "favorites/postSuccess";
export const POST_FAVORITES_FAILURE = "favorites/postFailure";

// Action creators
export function fetchFavoritesStart() {
  return {
    type: FETCH_FAVORITES_START
  };
}

export function fetchFavoritesSuccess(data) {
  return {
    type: FETCH_FAVORITES_SUCCESS,
    payload: {
      favorites: data
    }
  };
}

export function fetchFavoritesFailure(error) {
  return {
    type: FETCH_FAVORITES_FAILURE,
    payload: {
      error
    }
  };
}

export function startPolling() {
  return {
    type: START_POLLING_FAVORITES
  };
}

export function stopPolling() {
  return {
    type: STOP_POLLING_FAVORITES
  };
}

export function postFavoritesStart(data) {
  return {
    type: POST_FAVORITES_START,
    payload: {
      data
    }
  };
}

export function postFavoritesSuccess(data) {
  return {
    type: POST_FAVORITES_SUCCESS,
    payload: {
      favorite: data
    }
  };
}

export function postFavoritesFailure(error) {
  return {
    type: POST_FAVORITES_FAILURE,
    payload: {
      error
    }
  };
}

// Reducer
const initialState = {
  favorites: [],
  favoritesById: {},
  isLoading: false,
  error: null,
  isPolling: false,
  updatedAt: null
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FAVORITES_START:
      return { ...state, isLoading: true };
    case FETCH_FAVORITES_SUCCESS:
      const { favorites } = action.payload;
      const favoritesById = {};
      for (const favorite of favorites) {
        favoritesById[favorite.id] = favorite;
      }
      const today = new Date();
      const date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      return {
        ...state,
        isLoading: false,
        updatedAt: dateTime,
        error: null,
        favorites,
        favoritesById
      };
    case FETCH_FAVORITES_FAILURE:
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    case START_POLLING_FAVORITES:
      return { ...state, isPolling: true };
    case STOP_POLLING_FAVORITES:
      return { ...state, isPolling: false };
    default:
      return state;
  }
};

export default favoritesReducer;
