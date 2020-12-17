import React from 'react';

const initContext = () => {
  return {
    locations: [],
    affiliates: [
      {
        _id: 0x5fd9fa1271a7041cdac783d2,
        firstName: 'Dave',
        lastName: 'Medina',
        address: 'cosopere 123',
        email: 'media@davemedina.tv',
        plan: 'premium',
        __v: 0
      },
      {
        _id: 0x5fda01305f63e800175b982f,
        firstName: 'Coso',
        lastName: 'Pere',
        address: 'cosocolor 456',
        email: 'coso@cosopere.com',
        plan: 'basic',
        __v: 0
      }
    ]
  }
}

export const AdminContext = React.createContext(initContext());