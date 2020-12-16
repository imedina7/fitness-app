import React from 'react'
import { AdminContext } from './admin-context';

export default function AffiliatesTab() {

  return (
    <div>

      <h2>Manage Affiliates:</h2>
      <AdminContext.Consumer>
        { value => (
        <table>
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Plan</th>
            <th>Actions</th>
          </thead>
          <tbody>
          { value.affiliates.map(affiliate => (
            <tr key={ affiliate._id }>
              <td>{affiliate.firstName}</td>
              <td>{affiliate.lastName}</td>
              <td>{affiliate.address}</td>
              <td>{affiliate.email}</td>
              <td>{affiliate.plantype}</td>
              <td><button>Edit</button>|<button>Delete</button></td>
            </tr>
          )) }
          </tbody>
        </table>
        )}
      </AdminContext.Consumer>
    </div>
  )
}
