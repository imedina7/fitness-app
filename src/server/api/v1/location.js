import LocationDocument from '../../db/model/location.js';

const LocationModel = LocationDocument.getModel();

const getLocations = (req, res) => {
  LocationModel.find().then(locationList => {
    res.json(locationList);
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
