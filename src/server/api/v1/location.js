const getLocations = (req, res, next) => {
  res.send('locations');
  next();
}
const getSingleLocation = (req, res, next) => {
  const locationObject = { _id: 1, 
    city: 'Montevideo',
    country: 'Uruguay',
    address: 'Av. Dr. Luis Alberto de Herrera 1847',
    geolocation: {type: 'Point', coordinates: [ -34.893504, -56.144343 ] },
    type: 'indoors',
    openhours: 'Mon. - Sat., 9:00AM - 10PM'
   };
  const reqLocId = parseInt(req.params.id, 10);

  if (reqLocId === 1) {
    res.json(locationObject);
  } else {
    res.sendStatus(404);
  }
  next()
};

const LocationApiHandlers = {getLocations, getSingleLocation};

export default LocationApiHandlers;
