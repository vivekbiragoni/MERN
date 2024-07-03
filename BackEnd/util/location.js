import HttpError from "../Model/http-error.js";
import axios from "axios";
const API_KEY = process.env.API_KEY;

const getCoordsForAddress = async (address) => {
  const response = await axios.get(
    "https://maps.googleapis.com/maps/api/geocode/json",
    {
      params: {
        address: address,
        key: API_KEY,
      },
    }
  );
  const data = response.data;
  if (!data || data.status === "ZERO_RESULTS") {
    const error = new HttpError(
      "Could not find a place for the specified address",
      404
    );
    throw error;
  }
  const coordinates = data.results[0].geometry.location;
  return coordinates;
};


export default getCoordsForAddress;