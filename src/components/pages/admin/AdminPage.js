import React from 'react'
import Tabs from '../../layout/Tabs';
import LocationsTab from './LocationsTab';
import AffiliatesTab from './AffiliatesTab';

export default class AdminPage extends React.Component {
  constructor (props){
    super(props)
    const opentabs = new Set();

    opentabs.add({ 
      label: "Locations",
      closeable: false,
      element: <LocationsTab label={this.label} closeable={ this.closeable } />
    });
    opentabs.add({ 
      label: "Affiliates",
      closeable: false,
      element: <AffiliatesTab label={this.label} closeable={ this.closeable } />
    });

    this.state = { opentabs };
  }
  openNewAffiliateTab = (tab) => {
    const tabset = this.state.tabset;
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

  render() {
    return (
      <div>
        <h2>Admin page</h2>
        <Tabs>
        </Tabs>
      </div>
    )
  } 
}
