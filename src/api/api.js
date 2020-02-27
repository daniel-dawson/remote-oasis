import axios from "axios";

const BASE_URL = "http://www.localhost:3000";

class FetchError extends Error {
  constructor(message) {
    super(message);
    this.name = "FetchError";
  }
}

export async function getCafes(location) {
  const url = BASE_URL + `/search/${location}`;
  try {
    const resp = await axios.get(url);
    const cafes = resp.data.data.search.business;
    console.log("TCL: getCafes -> resp", cafes);
    return { cafes };
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
    throw new FetchError("Unable to fetch results for location");
  }
}

export async function getFavorites() {
  const url = BASE_URL + "/favorites";
  try {
    const resp = await axios.get(url);
    const favorites = resp.data.data;
    console.log("TCL: getFavorites -> favorites", favorites);
    return favorites;
  } catch (error) {
    console.log("TCL: getFavorites -> error", error);
    throw new FetchError("Unable to fetch favorites");
  }
}

export async function postFavorite(data) {
  const url = BASE_URL + "/favorites";
  const params = { cafe: { ...data, yelp_identifier: data.id } };
  try {
    const resp = await axios.post(url, params);
    const favorites = resp.data.data;
    return favorites;
  } catch (error) {
    throw new Error("Could not complete the Post");
  }
}
