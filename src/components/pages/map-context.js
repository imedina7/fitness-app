import React from 'react';

const initContext = () => {
  return {
    locations: []
  }
}

export const MapContext = React.createContext(initContext());