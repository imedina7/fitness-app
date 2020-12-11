import axios from 'axios';
import Location from '../model/Location';

export default function apiclient () {
  return {
    getLocations: async () => {
      const locationListString = await axios.get('/api/v1/locations');
      const locationList = JSON.parse(locationListString);

      const locationObjectArray = locationList.map((locationItem) => {
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
    }
  }
}