import React from 'react';

const initContext = () => ({
  locations: [],
  affiliates: [],
});

const AdminContext = React.createContext(initContext());

export default AdminContext;
