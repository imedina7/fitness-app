/* eslint-disable no-console */
import axios from 'axios';
import LocationDocument from '../../db/model/location.js';
import config from '../../config.js';

const LocationModel = LocationDocument.getModel();

const getLocations = (req, res) => {
  const { options } = req.query;
  let weatherFlag = false;

  LocationModel.find()
    .then((locationList) => {
      if (options) {
        const optionList = options.split(',');
        weatherFlag = optionList.indexOf('weather') !== -1;
      }
      if (weatherFlag) {
        Promise.all(
          locationList.map(async (location) => {
            const lat = location.geolocation.coordinates[0];
            const lon = location.geolocation.coordinates[1];
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config.OWM_APIKEY}&units=metric`,
            );
            const result = response.data;

            const weather = {
              main: result.weather[0].main,
              description: result.weather[0].description,
              details: {
                ...result.main,
                clouds: result.clouds,
                wind: result.wind,
              },
            };

            const newLocation = { ...location._doc, weather };
            return newLocation;
          }),
        )
          .then((locationsPlusWeather) => {
            res.json(locationsPlusWeather);
          })
          .catch((err) => console.error(err));
      } else {
        res.json(locationList);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const getSingleLocation = (req, res) => {
  LocationModel.find({ _id: req.params.id })
    .then((location) => {
      res.json(location);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
  res.json([]);
};

const updateLocation = (req, res) => {
  LocationModel.updateOne({ _id: req.params.id })
    .then((location) => {
      res.json(location);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
  res.json([]);
};

const putLocation = (req, res) => {
  const location = req.body;
  console.log(req.body);
  const locationCoords = {
    type: 'Point',
    coordinates: [
      parseFloat(location.longitude),
      parseFloat(location.latitude),
    ],
  };
  const locationDoc = new LocationDocument(
    location.title,
    location.city,
    location.country,
    location.address,
    locationCoords,
    location.type,
    location.openhours,
  );

  locationDoc
    .save()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteLocation = (req, res) => {
  LocationModel.deleteOne({ _id: req.params.id })
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const LocationApiHandlers = {
  getLocations,
  putLocation,
  updateLocation,
  deleteLocation,
  getSingleLocation,
};

export default LocationApiHandlers;
