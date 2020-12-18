import LocationDocument from '../../db/model/location.js';
import axios from 'axios';
import config from '../../config.js';

const LocationModel = LocationDocument.getModel();

const getLocations = (req, res) => {
  const { options } = req.query;
  let weather_flag = false;

  LocationModel.find().then(locationList => {

    if (options){

      const optionList = options.split(',');
      weather_flag = optionList.indexOf('weather') !== -1;

    }
    if ( weather_flag ) {

      Promise.all(locationList.map(async location => {
        const lat = location.geolocation.coordinates[0];
        const lon = location.geolocation.coordinates[1];
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config.OWM_APIKEY}&units=metric`);
        const result = response.data;

        const weather = {
          main: result.weather[0].main,
          description: result.weather[0].description,
          details: {...result.main, clouds: result.clouds, wind: result.wind }
        }

        const newLocation = {...location._doc, weather};
        return newLocation;
      })).then( locationsPlusWeather => {

        res.json(locationsPlusWeather);
      }).catch( err => console.error(err));

    } else {
      res.json(locationList);
    }


  }).catch( err => {
    console.error(err);
    res.sendStatus(500);
  });

}
const getSingleLocation = (req, res) => {
  LocationModel.find({ _id: req.params.id }).then(location => {
    res.json(location);
  }).catch( err => {
    console.error(err);
    res.sendStatus(500);
  });
  res.json([]);
};

const LocationApiHandlers = {getLocations, getSingleLocation};

export default LocationApiHandlers;
