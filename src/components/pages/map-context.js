import React from 'react';

const initContext = () => ({
  locations: [],
});
const MapContext = React.createContext(initContext());

export default MapContext;
