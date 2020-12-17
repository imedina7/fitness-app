import React from 'react'
import GoogleMapReact from 'google-map-react';
import LocationTooltip from '../location-tooltip/LocationTooltip';

export default class LocationMap extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      markers: null
    }
  }
  static defaultProps = {
    center: {
      lat: -34.8884233,
      lng: -56.1286186
    },
    zoom: 11
  };
  componentDidMount () {
    const markers = this.props.locations.map( location => (
    <div lng={location.geolocation.coordinates[0]} key={location._id} lat={location.geolocation.coordinates[1]}>{location.title}</div>
    ));
    this.setState({ markers });
  }
  render () {
    const { locations, apikey, center, zoom } = this.props;
    const { markers } = this.state;
    console.log(locations);
    return (
      <div style={{ height: '80vh', width: '100%' }} data-testid="map-component">
        <GoogleMapReact
          bootstrapURLKeys={{ key: apikey }}
          defaultCenter={ center }
          defaultZoom={ zoom }
        > { markers }
        </GoogleMapReact>
      </div>
    )
  }
}
