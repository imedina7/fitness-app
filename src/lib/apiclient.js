import axios from 'axios';

export default function apiclient() {
  const BASE_URL = '';
  return {
    getLocations: async () => {
      const locationList = await axios.get(`${BASE_URL}/api/v1/locations`);

      const locationObjectArray = locationList.data;

      return locationObjectArray;
    },
    getLocationsAndWeather: async () => {
      const locationList = await axios.get(
        `${BASE_URL}/api/v1/locations?options=weather`,
      );

      const locationObjectArray = locationList.data;

      return locationObjectArray;
    },
    getLocationFromId: async (_id) => {
      const locationObjString = await axios.get(
        `${BASE_URL}/api/v1/location/${_id}`,
      );
      const locationObj = JSON.parse(locationObjString);

      return locationObj;
    },
    newLocation: async (location) => {
      const response = await axios.put(`${BASE_URL}/api/v1/location`, location);
      return response.data;
    },
    editLocation: async (location) => {
      const response = await axios.post(
        `${BASE_URL}/api/v1/location/${location._id}`,
        location,
      );
      return response.data;
    },
    editAffiliate: async (affiliate) => {
      const response = await axios.post(
        `${BASE_URL}/api/v1/affiliate/${affiliate._id}`,
        affiliate,
      );
      return response.data;
    },
    newAffiliate: async (affiliate) => {
      const response = await axios.put(
        `${BASE_URL}/api/v1/affiliate`,
        affiliate,
      );
      return response.data;
    },
    getAffiliates: async () => {
      const response = await axios.get(`${BASE_URL}/api/v1/affiliates`);
      return response.data;
    },
    deleteAffiliate: async (id) => {
      const response = await axios.delete(`${BASE_URL}/api/v1/affiliate/${id}`);
      return response.data;
    },
    deleteLocation: async (id) => {
      const response = await axios.delete(`${BASE_URL}/api/v1/location/${id}`);
      return response.data;
    },
    getGoogleApiKey: async () => {
      const response = await axios.get(`${BASE_URL}/api/v1/auth`);
      return response.data;
    },
  };
}
