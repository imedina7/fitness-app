/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';

import Modal from '../../layout/modal/Modal';
import NewLocationForm from '../../forms/new-location-form/NewLocationForm';
import ButtonLink from '../../layout/button-link/ButtonLink';

import AdminContext from './admin-context';
import { adminEvents } from '../../../lib/eventHandlers';

export default function LocationsTab() {
  const history = useHistory();
  const [itemToEdit, setItemToEdit] = useState({});
  return (
    <div className="app-tab">
      <h2>Manage Locations:</h2>
      <AdminContext.Consumer>
        {(value) => (
          <>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>City</th>
                  <th>Country</th>
                  <th>Address</th>
                  <th>Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {value.locations.map((location) => (
                  <tr key={location._id}>
                    <td>{location.title}</td>
                    <td>{location.city}</td>
                    <td>{location.country}</td>
                    <td>{location.address}</td>
                    <td>{location.type}</td>
                    <td>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setItemToEdit(location);
                          history.push('/admin/edit/location');
                        }}
                      >
                        Edit
                      </button>
                      |
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (confirm('Are you sure?')) {
                            adminEvents.deleteLocation(location._id);
                          }
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ButtonLink url="/admin/new/location" title="Add location" />
            <Route path="/admin/new/location">
              <Modal title="New location" onClose={history.goBack}>
                <NewLocationForm
                  itemToEdit={{}}
                  onSubmit={async (location) => {
                    await adminEvents.submitNewLocation(location);
                    history.goBack();
                  }}
                />
              </Modal>
            </Route>
            <Route path="/admin/edit/location">
              <Modal title="Edit location" onClose={history.goBack}>
                <NewLocationForm
                  itemToEdit={itemToEdit}
                  onSubmit={async (location) => {
                    await adminEvents.editLocation(location);
                    history.goBack();
                  }}
                />
              </Modal>
            </Route>
          </>
        )}
      </AdminContext.Consumer>
    </div>
  );
}
