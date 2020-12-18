/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import './SignupForm.css';

export class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.plans = {
      basic: 'This is a basic plan',
      premium: 'This is the premium plan',
    };
  }

  setErrMsg(msg) {
    return this.setState(() => ({
      errorMsg: msg,
    }));
  }

  validateAndSubmit = (e) => {
    e.preventDefault();

    const { onSubmit } = this.props;
    const { firstname, lastname, address, email, plantype } = this.state;

    if (!(firstname && lastname && address && email && plantype)) {
      return this.setErrMsg('All fields are required.');
    }
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
    ) {
      return this.setErrMsg('Invalid email');
    }

    const parentEventHandler = onSubmit.bind(this);
    parentEventHandler(e);
  };

  getPlanInfo = () => {
    const { plantype } = this.state;
    return plantype !== undefined
      ? this.plans[plantype]
      : 'Please select a plan';
  };

  updateForm = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
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
          <label htmlFor="firstname">First Name: </label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            data-testid="firstname-field"
          />
        </div>
        <div className="formitem">
          <label htmlFor="lastname">Last Name: </label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            data-testid="lastname-field"
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
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            name="email"
            type="text"
            data-testid="email-field"
          />
        </div>
        <h3>Plan: </h3>
        <div className="formitem plan-selector">
          <label htmlFor="basic-plan" className="basic-plan">
            <input
              name="plantype"
              id="basic-plan"
              type="radio"
              value="basic"
              data-testid="basicplan-option"
            />
            <div>
              <span>Basic</span>
            </div>
          </label>
          <label htmlFor="premium-plan" className="premium-plan">
            <input
              name="plantype"
              id="premium-plan"
              type="radio"
              value="premium"
              data-testid="premiumplan-option"
            />
            <div>
              <span>Premium</span>
            </div>
          </label>
        </div>
        <div className="formitem">
          <p data-testid="plan-info-paragraph">{this.getPlanInfo()}</p>
        </div>
        <div className="formitem">
          <input type="submit" value="Sign up" data-testid="submit-btn" />
        </div>
      </form>
    );
  }
}

export default SignupForm;
