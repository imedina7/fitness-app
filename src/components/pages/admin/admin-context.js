import React from 'react';

const initContext = () => ({
  locations: [],
  setLocations() {},
  affiliates: [],
  setAffiliates() {},
});

const AdminContext = React.createContext(initContext());

export default AdminContext;
