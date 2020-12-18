/* eslint-disable no-console */
import AffiliateDocument from '../../db/model/affiliate.js';

const AffiliateModel = AffiliateDocument.getModel();

const getAffiliates = (req, res) => {
  AffiliateModel.find()
    .then((affiliateList) => {
      res.json(affiliateList);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const getSingleAffiliate = (req, res) => {
  res.sendStatus(200);
};
const deleteAffiliate = (req, res) => {
  AffiliateModel.deleteOne({ _id: req.params.id })
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
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
      console.error(err);
      res.sendStatus(500);
    });
};
const AffiliateApiHandlers = {
  getAffiliates,
  getSingleAffiliate,
  putAffiliate,
  deleteAffiliate,
};

export default AffiliateApiHandlers;
