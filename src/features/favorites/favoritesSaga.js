import { call, put, take, race, delay } from "redux-saga/effects";
import { getFavorites, postFavorite } from "../../api/api";

import {
  fetchFavoritesStart,
  fetchFavoritesSuccess,
  fetchFavoritesFailure,
  startPolling,
  stopPolling
} from "./favorites";

function* fetchFavorites() {
  while (true) {
    try {
      yield put(fetchFavoritesStart());
      console.log("Start fetch");
      const favorites = yield call(getFavorites);
      console.log("Do we get here?", favorites);
      yield put(fetchFavoritesSuccess(favorites));
      console.log("End fetch");
      // this should be race condition between delay
      // and take('POST_FAVORITE_SUCCESS') <-- doesn't exist yet
      // next poll will either start after 10 seconds, or when
      // a cafe is recommended
      yield delay(10000);
      console.log("Delayed here");
    } catch (error) {
      console.log("Error here?");
      yield put(fetchFavoritesFailure(error.message));
    }
  }
}

function* watchPollFavorites() {
  while (true) {
    yield take(startPolling().type);
    console.log("Polling started");
    yield race([call(fetchFavorites), take(stopPolling().type)]);
  }
}

export default function* root() {
  yield watchPollFavorites();
}
