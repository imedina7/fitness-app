import React from 'react';
import './LocationTooltip.css';

function LocationTooltip({ location }) {
  return (
    <div className="location-tooltip">
      <h3>{location.title}</h3>
      <p>
        <em>Type:</em> {location.type}
        <br />
        <em>Address:</em> {location.address}
        <br />
        <em>Weather:</em> {location.weather.description}
        <br />
        <em>Min/Max:</em> {location.weather.details.temp_min}°C/
        {location.weather.details.temp_max}°C
        <br />
      </p>
    </div>
  );
}

export default LocationTooltip;
