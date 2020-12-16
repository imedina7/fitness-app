import AffiliateDocument from '../../db/model/affiliate.js';

const getAffiliates = (db,req, res) => {
  const AffiliateModel = AffiliateDocument.getModel()
  AffiliateModel.find().then(affiliateList => {
    console.log('Listing affiliates from database...');
    console.log(affiliateList);
    res.json(affiliateList);
  }).catch(err => {
    console.error(err);
    res.sendStatus(500);
  })
}
const getSingleAffiliate = (db,req, res) => {
  const affiliateObject = { _id: 1, 
    city: 'Montevideo',
    country: 'Uruguay',
    address: 'Av. Dr. Luis Alberto de Herrera 1847',
    geoaffiliate: {type: 'Point', coordinates: [ -34.893504, -56.144343 ] },
    type: 'indoors',
    openhours: 'Mon. - Sat., 9:00AM - 10PM'
   };
  const reqLocId = parseInt(db,req.params.id, 10);

  if (reqLocId === 1) {
    res.json(affiliateObject);
  } else {
    res.sendStatus(404);
  }
};
const putAffiliate = (db,req, res, next) => {
  const affiliate = req.body;
  const affiliateDoc = new AffiliateDocument(affiliate.firstname, 
                                             affiliate.lastname, 
                                             affiliate.address, 
                                             affiliate.email, 
                                             affiliate.plantype);
  affiliateDoc.save().then(response => {
    console.log('Added affiliate');
    res.sendStatus(200);
  }).catch( err => {
    console.error(err);
    res.sendStatus(500);
  })
};
const AffiliateApiHandlers = {getAffiliates, getSingleAffiliate, putAffiliate};

export default AffiliateApiHandlers;
