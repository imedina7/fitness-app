import ExpressRouter from 'express';
import LocationApiHandlers from './location.js';
import AffiliateApiHandlers from './affiliate.js';

const ApiRouterV1 = (db) => {
    const router = new ExpressRouter();

    router.get('/locations', LocationApiHandlers.getLocations.bind(this, db));
    router.get('/location/:id', LocationApiHandlers.getSingleLocation.bind(this, db));
    router.get('/affiliates', AffiliateApiHandlers.getAffiliates.bind(this, db));
    router.put('/affiliate', AffiliateApiHandlers.putAffiliate.bind(this, db));

    return router;
}

export default ApiRouterV1;