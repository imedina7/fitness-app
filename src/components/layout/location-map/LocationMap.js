import React from 'react'
import GoogleMapReact from 'google-map-react';
import apiclient from '../../../lib/apiclient';

export default class LocationMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      gApiKey: undefined
    }
    this.apiclient = apiclient();
  }
  static defaultProps = {
    center: {
      lat: -34.8884233,
      lng: -56.1286186
    },
    zoom: 11
  };

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
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.state.gApiKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <LocationTooltip 
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    )
  }
}
