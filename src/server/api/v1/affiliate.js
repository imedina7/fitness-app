import AffiliateDocument from '../../db/model/affiliate.js';

const getAffiliates = (req, res) => {
  const AffiliateModel = AffiliateDocument.getModel();
  AffiliateModel.find()
    .then((affiliateList) => {
      res.json(affiliateList);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
      res.sendStatus(500);
    });
};
const getSingleAffiliate = (req, res) => {
  res.sendStatus(200);
};
const putAffiliate = (req, res) => {
  const affiliate = req.body;
  const affiliateDoc = new AffiliateDocument(
    affiliate.firstname,
    affiliate.lastname,
    affiliate.address,
    affiliate.email,
    affiliate.plantype,
  );
  affiliateDoc
    .save()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
      res.sendStatus(500);
    });
};
const AffiliateApiHandlers = {
  getAffiliates,
  getSingleAffiliate,
  putAffiliate,
};

export default AffiliateApiHandlers;
