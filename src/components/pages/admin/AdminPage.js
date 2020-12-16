import React from 'react'
import Tabs from '../../layout/Tabs';
import LocationsTab from './LocationsTab';
import AffiliatesTab from './AffiliatesTab';
import apiclient from '../../../lib/apiclient';
import { AdminContext } from './admin-context';

export default class AdminPage extends React.Component {
  constructor (props){
    super(props)
    const tabset = new Set();

    tabset.add({ 
      label: "Locations",
      closeable: false,
      element: LocationsTab
    });
    tabset.add({ 
      label: "Affiliates",
      closeable: false,
      element: AffiliatesTab
    });
    this.state = { tabset,
      data: {
        locations: [{ _id: 1, 
          city: 'Montevideo',
          country: 'Uruguay',
          address: 'Av. Dr. Luis Alberto de Herrera 1847',
          geolocation: {type: 'Point', coordinates: [ -34.893504, -56.144343 ] },
          type: 'indoors',
          openhours: 'Mon. - Sat., 9:00AM - 10PM'
         },{ _id: 2, 
          city: 'Montevideo',
          country: 'Uruguay',
          address: 'Av. Dr. Luis Alberto de Herrera 1847',
          geolocation: {type: 'Point', coordinates: [ -34.893504, -56.144343 ] },
          type: 'indoors',
          openhours: 'Mon. - Sat., 9:00AM - 10PM'
         }],
        affiliates: []
      }
    }
    this.apiclient = apiclient();
  }
  openNewAffiliateTab = () => {
    const tabset = this.state.tabset;
    const tab = {
      label: 'New Affiliate'
    }
    tabset.add(tab);
    this.setState({tabset});
  }
  closeTab = (tab) => {
    if (! tab.closeable ) {
      return;
    }
    const tabset = this.state.tabset;
    tabset.delete(tab);
    this.setState({tabset});
  }
  componentDidMount () {
    
    const { apiclient } = this;

    apiclient.getLocations().then((locations) => this.setState({data: { locations }}) )
    .catch(err => console.error(err) );

    apiclient.getAffiliates().then((affiliates) => this.setState({data: { affiliates }}) )
    .catch(err => console.error(err) );
  }
  render() {
    const { closeTab, state: {data} } = this;
    return (
      <div>
        <h2>Admin page</h2>
        <AdminContext.Provider value={ data }>

          <Tabs>
            {Array.from(this.state.tabset).map((tab) => { 
              const TabElement = tab.element;
              return (
                <div label={tab.label} closeable={tab.closeable} onClose={ closeTab(tab) }>
                  <TabElement />
                </div>
              )
            })}
          </Tabs>
        </AdminContext.Provider>
      </div>
    )
  } 
}
