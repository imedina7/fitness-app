/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

class NewLocationForm extends Component {
  constructor(props) {
    super(props);
    const { edit } = this.props;
    this.state = edit ? { ...edit } : {};
  }

  setErrMsg(msg) {
    return this.setState(() => ({
      errorMsg: msg,
    }));
  }

  updateForm = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  validateAndSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const {
      title,
      city,
      country,
      address,
      latitude,
      longitude,
      type,
    } = this.state;

    if (
      !(title && city && country && address && latitude && longitude && type)
    ) {
      return this.setErrMsg('All fields are required.');
    }
    this.setErrMsg('');
    return onSubmit(this.state);
  };

  render() {
    const { errorMsg } = this.state;
    const { itemToEdit } = this.props;
    const {
      _id,
      title,
      city,
      country,
      address,
      geolocation,
      openhours,
      type,
    } = itemToEdit;
    const {
      coordinates: [longitude, latitude],
    } = geolocation || { coordinates: [0, 0] };
    return (
      <form
        onSubmit={this.validateAndSubmit}
        className="signup-form"
        onChange={this.updateForm}
        data-testid="signup-form"
      >
        <div className="formitem">
          <p className="error-msg">{errorMsg}</p>
        </div>
        {_id ? <input type="hidden" name="_id" value={_id} /> : []}
        <div className="formitem">
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            name="title"
            defaultValue={title || ''}
            type="text"
            data-testid="title-field"
          />
        </div>
        <div className="formitem">
          <label htmlFor="city">City: </label>
          <input
            id="city"
            name="city"
            type="text"
            defaultValue={city || ''}
            data-testid="city-field"
          />
        </div>
        <div className="formitem">
          <label htmlFor="country">Country: </label>
          <input
            id="country"
            name="country"
            defaultValue={country || ''}
            type="text"
            data-testid="country-field"
          />
        </div>
        <div className="formitem">
          <label htmlFor="address">Address: </label>
          <input
            id="address"
            name="address"
            defaultValue={address || ''}
            type="text"
            data-testid="address-field"
          />
        </div>
        <div className="formitem">
          <label htmlFor="latitude">Latitude: </label>
          <input
            id="latitude"
            name="latitude"
            type="number"
            defaultValue={latitude || ''}
            step="any"
            data-testid="latitude-field"
          />
        </div>
        <div className="formitem">
          <label htmlFor="longitude">Longitude: </label>
          <input
            id="longitude"
            name="longitude"
            type="number"
            defaultValue={longitude || ''}
            step="any"
            data-testid="longitude-field"
          />
        </div>
        <div className="formitem">
          <label htmlFor="openhours">Open Hours: </label>
          <input
            id="openhours"
            name="openhours"
            defaultValue={openhours || ''}
            type="text"
            data-testid="openhours-field"
          />
        </div>
        <h3>Type: </h3>
        <div className="formitem type-selector">
          <select name="type" defaultValue={type || ''}>
            <option>Select an option</option>
            <option value="indoors">Only indoors</option>
            <option value="outdoors">Outdoors</option>
          </select>
        </div>
        <div className="formitem">
          <input type="submit" value="Submit" data-testid="submit-btn" />
        </div>
      </form>
    );
  }
}

export default NewLocationForm;
