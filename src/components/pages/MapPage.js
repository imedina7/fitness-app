import React from 'react';
import LocationMap from '../layout/location-map/LocationMap';
import apiclient from '../../lib/apiclient';
import { MapContext } from './map-context';

export default class MapPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      gApiKey: ''
    }
  }
  componentDidMount () {

    apiclient().getGoogleApiKey().then( responseData => {
      this.setState(() => {
        return { gApiKey: responseData.apikey }
      });
    }).catch(err => console.error('Failed to get google api key from api: ', err));

    apiclient().getLocationsAndWeather().then(locations =>
      this.setState(() => {
        return { locations } 
      })
    ).catch(err => 
        console.error('Failed to get locations from api: ', err)
    );

  }
  render () {
    const {locations, gApiKey} = this.state;
    return (
      <MapContext.Provider value={ locations }>
        <div>
          <LocationMap apikey={ gApiKey }/>
        </div>
      </MapContext.Provider>
    )
  }
}
