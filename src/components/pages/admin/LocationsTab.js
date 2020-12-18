/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Route, useHistory } from 'react-router-dom';

import Modal from '../../layout/modal/Modal';
import NewLocationForm from '../../forms/new-location-form/NewLocationForm';
import ButtonLink from '../../layout/button-link/ButtonLink';

import AdminContext from './admin-context';

export default function LocationsTab() {
  const history = useHistory();

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
                      <button type="button">Edit</button>|
                      <button type="button">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ButtonLink url="/admin/new/location" title="Add location" />
            <Route path="/admin/new/location">
              <Modal title="New location" onClose={history.goBack}>
                <NewLocationForm />
              </Modal>
            </Route>
            <Route path="/admin/edit/location">
              <Modal title="Edit location" onClose={history.goBack}>
                <NewLocationForm />
              </Modal>
            </Route>
          </>
        )}
      </AdminContext.Consumer>
    </div>
  );
}
