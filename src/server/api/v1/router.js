import ExpressRouter from 'express';
import LocationApiHandlers from './location.js';

const ApiRouterV1 = () => {
    const router = new ExpressRouter();

    router.get('/locations', LocationApiHandlers.getLocations);
    router.get('/location/:id', LocationApiHandlers.getSingleLocation);

    return router;
}

export default ApiRouterV1;