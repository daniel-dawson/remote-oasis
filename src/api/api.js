import axios from "axios";

const BASE_URL = "http://www.localhost:3000/search";

export async function getCafes(location) {
  const url = BASE_URL + `/${location}`;
  try {
    const resp = await axios.get(url);
    const cafes = resp.data.data.search.business;
    console.log("TCL: getCafes -> resp", cafes);
    return { cafes };
  } catch (error) {
    console.log("TCL: getCafes -> error", error);
    throw error;
  }
}
