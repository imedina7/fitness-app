import ExpressRouter from 'express';
import LocationApiHandlers from './location.js';
import AffiliateApiHandlers from './affiliate.js';
import AuthApiHandlers from './auth.js';

const ApiRouterV1 = () => {
  const router = new ExpressRouter();

  router.get('/locations', LocationApiHandlers.getLocations);
  router.put('/location', LocationApiHandlers.putLocation);
  router.get('/location/:id', LocationApiHandlers.getSingleLocation);
  router.get('/affiliates', AffiliateApiHandlers.getAffiliates);
  router.put('/affiliate', AffiliateApiHandlers.putAffiliate);
  router.delete('/affiliate/:id', AffiliateApiHandlers.deleteAffiliate);
  router.delete('/location/:id', AffiliateApiHandlers.deleteLocation);

  router.get('/auth', AuthApiHandlers.getApiKey);

  return router;
};

export default ApiRouterV1;
