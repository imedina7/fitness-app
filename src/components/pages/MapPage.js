import React from 'react';
import LocationMap from '../layout/location-map/LocationMap';
import apiclient from '../../lib/apiclient';

export default class MapPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      gApiKey: ''
    }
    this.apiclient = apiclient();
  }
  componentDidMount () {
    const { apiclient, setState } = this;
    apiclient.getGoogleApiKey().then( responseData => {
      setState({ gApiKey: responseData.apikey });
    }).catch(err => console.error('Failed to get google api key from api: ', err));

    apiclient.getLocations().then(responseData => {
      setState({ locations: responseData });
    }).catch(err => console.error('Failed to get locations from api: ', err));

  }
  render () {
    const {locations, gApiKey} = this.state;
    return (
      <div>
        <LocationMap locations={ locations } apikey={ gApiKey }/>
      </div>
    )
  }
}
