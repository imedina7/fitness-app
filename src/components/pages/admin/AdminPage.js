import React from 'react'
import Tabs from '../../layout/tabs/Tabs';
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
        locations: [],
        affiliates: []
    }
  }
  deleteItem = (item, type) => {
    console.log(item, type);
  }
  editItem = (item, type) => {
    console.log(item, type);
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
    
    apiclient().getLocations().then(
      (locations) => this.setState({ locations }) 
    ).catch(err => console.error(err) );

    apiclient().getAffiliates().then((affiliates) => this.setState({ affiliates }) 
    ).catch(err => console.error(err) );
  }
  render() {
    const { closeTab, state: {locations, affiliates} } = this;
    return (
      <div>
        <h2>Admin page</h2>
        <AdminContext.Provider value={ {locations, affiliates} }>

          <Tabs>
            {Array.from(this.state.tabset).map((tab) => { 
              const TabElement = tab.element;
              return (
                <div label={tab.label} key={tab.label} closeable={tab.closeable} onClose={ closeTab(tab) }>
                  <TabElement onDelete={ this.deleteItem } onEdit={ this.editItem }/>
                </div>
              )
            })}
          </Tabs>
        </AdminContext.Provider>
      </div>
    )
  } 
}
