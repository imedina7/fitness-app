/* eslint-disable no-console */
import React from 'react';
import Tabs from '../../layout/tabs/Tabs';
import LocationsTab from './LocationsTab';
import AffiliatesTab from './AffiliatesTab';
import apiclient from '../../../lib/apiclient';
import AdminContext from './admin-context';
// import { adminEvents } from '../../../lib/eventHandlers';

export default class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    const tabset = new Set();

    tabset.add({
      label: 'Locations',
      element: LocationsTab,
    });
    tabset.add({
      label: 'Affiliates',
      element: AffiliatesTab,
    });
    this.state = { tabset, locations: [], affiliates: [] };
  }

  componentDidMount() {
    apiclient()
      .getLocations()
      .then((locations) => this.setState({ locations }))
      .catch((err) => console.error(err));

    apiclient()
      .getAffiliates()
      .then((affiliates) => this.setState({ affiliates }))
      .catch((err) => console.error(err));
  }

  openNewAffiliateTab = () => {
    const { tabset } = this.state;
    const tab = {
      label: 'New Affiliate',
    };
    tabset.add(tab);
    this.setState({ tabset });
  };

  setAffiliates = (affiliates) => {
    this.setState({ affiliates });
  };

  setLocations = (affiliates) => {
    this.setState({ affiliates });
  };

  render() {
    const {
      state: { locations, setLocations, affiliates, setAffiliates },
    } = this;
    const { tabset } = this.state;
    return (
      <div>
        <h2>Admin page</h2>
        <AdminContext.Provider
          value={{ locations, setLocations, affiliates, setAffiliates }}
        >
          <Tabs>
            {Array.from(tabset).map((tab) => {
              const TabElement = tab.element;
              return (
                <div label={tab.label} key={tab.label}>
                  <TabElement />
                </div>
              );
            })}
          </Tabs>
        </AdminContext.Provider>
      </div>
    );
  }
}
