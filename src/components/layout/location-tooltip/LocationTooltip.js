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
                    
                </p>
            </div>
        )
    }
}

export default LocationTooltip
