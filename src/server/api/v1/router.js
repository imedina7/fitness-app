import ExpressRouter from 'express';
import LocationApiHandlers from './location.js';
import AffiliateApiHandlers from './affiliate.js';
import AuthApiHandlers from './auth.js';

const ApiRouterV1 = () => {
    const router = new ExpressRouter();

    router.get('/locations', LocationApiHandlers.getLocations);
    router.get('/location/:id', LocationApiHandlers.getSingleLocation);
    router.get('/affiliates', AffiliateApiHandlers.getAffiliates);
    router.put('/affiliate', AffiliateApiHandlers.putAffiliate);
    
    router.get('/auth', AuthApiHandlers.getApiKey);

    return router;
}

export default ApiRouterV1;