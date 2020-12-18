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
    const parentEventHandler = onSubmit.bind(this);
    return parentEventHandler(e);
  };

  render() {
    const { errorMsg } = this.state;
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
        <div className="formitem">
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            name="title"
            type="text"
            data-testid="title-field"
          />
        </div>
        <div className="formitem">
          <label htmlFor="city">City: </label>
          <input id="city" name="city" type="text" data-testid="city-field" />
        </div>
        <div className="formitem">
          <label htmlFor="country">Country: </label>
          <input
            id="country"
            name="country"
            type="text"
            data-testid="country-field"
          />
        </div>
        <div className="formitem">
          <label htmlFor="address">Address: </label>
          <input
            id="address"
            name="address"
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
            data-testid="latitude-field"
          />
        </div>
        <div className="formitem">
          <label htmlFor="longitude">Longitude: </label>
          <input
            id="longitude"
            name="longitude"
            type="number"
            data-testid="longitude-field"
          />
        </div>
        <h3>Type: </h3>
        <div className="formitem type-selector">
          <select name="type">
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
