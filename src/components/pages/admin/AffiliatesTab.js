import React from 'react'
import { AdminContext } from './admin-context';
import { Route } from 'react-router-dom';
import Modal from '../../layout/modal/Modal';

import ButtonLink from '../../layout/button-link/ButtonLink';

export default function AffiliatesTab({onEdit, onDelete}) {

  return (
    <div className="app-tab">

      <h2>Manage Affiliates:</h2>
      <AdminContext.Consumer>
        { value => (
        <>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Plan</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          { value.affiliates.map(affiliate => (
            <tr key={ affiliate._id }>
              <td>{affiliate.firstName}</td>
              <td>{affiliate.lastName}</td>
              <td>{affiliate.address}</td>
              <td>{affiliate.email}</td>
              <td>{affiliate.plan}</td>
              <td><button onClick={ onEdit(affiliate, "affiliate") }>Edit</button>|<button onClick={ onDelete(affiliate, "affiliate") }>Delete</button></td>
            </tr>
          )) }
          </tbody>
        </table>
        <ButtonLink url="/admin/new/affiliate" title="Add affiliate" />
        <Route path="/admin/new/affiliate">
            <Modal></Modal>
        </Route>
        </>
        )}
      </AdminContext.Consumer>
    </div>
  )
}
