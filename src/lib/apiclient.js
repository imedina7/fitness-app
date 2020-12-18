import axios from 'axios';
import Location from '../model/Location';

export default function apiclient () {
  const BASE_URL = ''
  return {
    getLocations: async () => {
      const locationList = await axios.get(`${BASE_URL}/api/v1/locations`);

      const locationObjectArray = locationList.data;

      return locationObjectArray;
    },
    getLocationsAndWeather: async () => {
      const locationList = await axios.get(`${BASE_URL}/api/v1/locations?options=weather`);

      const locationObjectArray = locationList.data;

      return locationObjectArray;
    },
    getLocationFromId: async (_id) => {
      const locationObjString = await axios.get(`${BASE_URL}/api/v1/location/${_id}`);
      const locationObj = JSON.parse(locationObjString);

      return new Location(locationObj._id,
                          locationObj.city,
                          locationObj.country,
                          locationObj.address,
                          locationObj.geolocation,
                          locationObj.type,
                          locationObj.openhours);
    },
    newLocation: async (location) => {
      const response = await axios.put(`${BASE_URL}/api/v1/location`, location);
      return response.data;
    },
    newAffiliate: async (affiliate) => {
      const response = await axios.put(`${BASE_URL}/api/v1/affiliate`, affiliate);
      return response.data;
    },
    getAffiliates: async () => {
      const response = await axios.get(`${BASE_URL}/api/v1/affiliates`);
      return response.data;
    },
    getGoogleApiKey: async () => {
      const response = await axios.get(`${BASE_URL}/api/v1/auth`);
      return response.data;
    }
  }
}