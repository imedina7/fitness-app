import React, {useState} from 'react'
import { Route, useHistory } from 'react-router-dom';

import Modal from '../../layout/modal/Modal';
import NewLocationForm from '../../forms/new-location-form/NewLocationForm';
import ButtonLink from '../../layout/button-link/ButtonLink';

import { AdminContext } from './admin-context';

import apiclient from '../../../lib/apiclient';

export default function LocationsTab() {
  const history = useHistory();
  const [ editLocation, setEditLocation] = useState({});
  const client = apiclient();
  const handleSubmit = function () {
      client.newLocation(this.state).then(response => {
        console.log('Location saved successfuly');
      }).catch( err => console.error(err));
  }
  const onEdit = (location) => {
    setEditLocation(location);
    history.push('/admin/edit/location');
  }
  return (
    <div className="app-tab">
      <h2>Manage Locations:</h2>
      <AdminContext.Consumer>
        { value => (
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
          { value.locations.map(location => (
            <tr key={ location._id }>
              <td>{location.title}</td>
              <td>{location.city}</td>
              <td>{location.country}</td>
              <td>{location.address}</td>
              <td>{location.type}</td>
              <td><button>Edit</button>|<button>Delete</button></td>
            </tr>
          )) }
          </tbody>
        </table>
        <ButtonLink url="/admin/new/location" title="Add location" />
        <Route path="/admin/new/location">
            <Modal title="New location" onClose={ history.goBack }>
              <NewLocationForm onSubmit={ handleSubmit }/>
            </Modal>
        </Route>
        <Route path="/admin/edit/location">
            <Modal title="Edit location" onClose={ history.goBack }>
              <NewLocationForm onSubmit={ handleSubmit } edit={ editLocation }/>
            </Modal>
        </Route>
        </>
        )}
      </AdminContext.Consumer>
    </div>
  )
}
