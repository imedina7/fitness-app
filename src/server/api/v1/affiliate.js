const getAffiliates = (req, res, next) => {
  res.send('Affiliates');
  next();
}
const getSingleAffiliate = (req, res, next) => {
  const affiliateObject = { _id: 1, 
    city: 'Montevideo',
    country: 'Uruguay',
    address: 'Av. Dr. Luis Alberto de Herrera 1847',
    geoaffiliate: {type: 'Point', coordinates: [ -34.893504, -56.144343 ] },
    type: 'indoors',
    openhours: 'Mon. - Sat., 9:00AM - 10PM'
   };
  const reqLocId = parseInt(req.params.id, 10);

  if (reqLocId === 1) {
    res.json(affiliateObject);
  } else {
    res.sendStatus(404);
  }
  next()
};
const putAffiliate = (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
};
const AffiliateApiHandlers = {getAffiliates, getSingleAffiliate, putAffiliate};

export default AffiliateApiHandlers;
