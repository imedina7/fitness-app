import React from 'react';

const initContext = () => {
  return {
    locations: [],
    affiliates: []
  }
}

export const AdminContext = React.createContext(initContext());