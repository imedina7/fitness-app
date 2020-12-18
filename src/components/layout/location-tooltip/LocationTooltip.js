import React, { Component } from 'react'

export class LocationTooltip extends Component {
    constructor (props) {
        super(props);
        const { location } = this.props;

        this.state = {
            location
        }
    }
    
    render() {
        const { location } = this.state;
        return (
            <div>
                <h3>{location.title}</h3>
                <p>
                    Weather: {location.weather.description}<br/>
                    Min/Max: {location.weather.details.temp_min}°C/{location.weather.details.temp_max}°C
                </p>
            </div>
        )
    }
}

export default LocationTooltip
