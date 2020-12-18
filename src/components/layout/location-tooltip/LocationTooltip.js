import React from 'react';
import './LocationTooltip.css';

function LocationTooltip({ location }) {
  return (
    <div className="location-tooltip">
      <h3>{location.title}</h3>
      <p>
        Weather: {location.weather.description}
        <br />
        Min/Max: {location.weather.details.temp_min}°C/
        {location.weather.details.temp_max}°C
      </p>
    </div>
  );
}

export default LocationTooltip;
