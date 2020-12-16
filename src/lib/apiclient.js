import axios from 'axios';
import Location from '../model/Location';

export default function apiclient () {
  return {
    getLocations: async () => {
      const locationList = await axios.get('/api/v1/locations');

      const locationObjectArray = locationList.data.map((locationItem) => {
        return new Location(locationItem._id,
                            locationItem.city, 
                            locationItem.country, 
                            locationItem.address, 
                            locationItem.geolocation, 
                            locationItem.type, 
                            locationItem.openhours)
      });

      return locationObjectArray;
    },
    getLocationFromId: async (_id) => {
      const locationObjString = await axios.get(`/api/v1/location/${_id}`);
      const locationObj = JSON.parse(locationObjString);

      return new Location(locationObj._id,
                          locationObj.city,
                          locationObj.country,
                          locationObj.address,
                          locationObj.geolocation,
                          locationObj.type,
                          locationObj.openhours);
    },
    newAffiliate: async (affiliate) => {
      const response = await axios.put('/api/v1/affiliate', affiliate);
      return response.data;
    },
    getAffiliates: async () => {
      const response = await axios.get('/api/v1/affiliates');
      return response.data;
    },
    getGoogleApiKey: async () => {
      const response = await axios.get('/api/v1/auth?type=google');
      return response.data;
    }
  }
}