/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import React, { useContext, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import AdminContext from './admin-context';
import Modal from '../../layout/modal/Modal';
import SignupForm from '../../forms/signup/SignupForm';
import ButtonLink from '../../layout/button-link/ButtonLink';
import { formEvents, adminEvents } from '../../../lib/eventHandlers';

export default function AffiliatesTab() {
  const history = useHistory();
  const adminData = useContext(AdminContext);
  const [itemToEdit, setItemToEdit] = useState({});
  return (
    <div className="app-tab">
      <h2>Manage Affiliates:</h2>
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
          {adminData.affiliates.map((affiliate) => (
            <tr key={affiliate._id}>
              <td>{affiliate.firstName}</td>
              <td>{affiliate.lastName}</td>
              <td>{affiliate.address}</td>
              <td>{affiliate.email}</td>
              <td>{affiliate.plan}</td>
              <td>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setItemToEdit(affiliate);
                    history.push('/admin/edit/affiliate');
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
                      adminEvents.deleteAffiliate(affiliate._id);
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
      <ButtonLink url="/admin/new/affiliate" title="Add affiliate" />
      <Route path="/admin/new/affiliate">
        <Modal
          onClose={(e) => {
            e.stopPropagation();
            history.goBack();
          }}
        >
          <h2>New Affiliate:</h2>
          <SignupForm
            itemToEdit={{}}
            submitLabel="Save"
            onSubmit={async (affiliate) => {
              await formEvents.submitSignupForm(affiliate);
              history.goBack();
              adminData.pushAffiliate(affiliate);
            }}
          />
        </Modal>
      </Route>
      <Route path="/admin/edit/affiliate">
        <Modal
          onClose={(e) => {
            e.stopPropagation();
            history.goBack();
          }}
        >
          <h2>Edit Affiliate:</h2>
          <SignupForm
            submitLabel="Save"
            itemToEdit={itemToEdit}
            onSubmit={async (affiliate) => {
              await formEvents.submitSignupForm(affiliate);
              history.goBack();
              adminData.pushAffiliate(affiliate);
            }}
          />
        </Modal>
      </Route>
    </div>
  );
}
