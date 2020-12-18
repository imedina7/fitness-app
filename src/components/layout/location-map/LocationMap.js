import React from 'react'
import GoogleMapReact from 'google-map-react';
import LocationTooltip from '../location-tooltip/LocationTooltip';
import { MapContext } from '../../pages/map-context';

export default class LocationMap extends React.Component {
  constructor (props) {
    super(props);
    const { locations } = this.props;
    this.state = {
      markers: null,
      locations
    }
  }
  static defaultProps = {
    center: {
      lat: -34.8884233,
      lng: -56.1286186
    },
    zoom: 11
  };
  getMarkers = (locations) => {
    return locations.map( location => (
      <LocationTooltip location={location} key={location._id} 
      lat={ location.geolocation.coordinates[0] }
      lng={ location.geolocation.coordinates[1] }></LocationTooltip>
      ));
  } 
  componentDidMount () {
  }
  render () {
    const { apikey, center, zoom } = this.props;

    return (
      <MapContext.Consumer>
        { value => (

          <div style={{ height: '87vh', width: '100%' }} data-testid="map-component">
          <GoogleMapReact
            bootstrapURLKeys={{ key: apikey }}
            defaultCenter={ center }
            defaultZoom={ zoom }
            >{ this.getMarkers(value) }
          </GoogleMapReact>
        </div>
        )}
      </MapContext.Consumer>
    )
  }
}
