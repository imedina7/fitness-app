import React, { Component } from 'react'
import "./SignupForm.css";

export class SignupForm extends Component {
  constructor (props){
    super(props)

    this.state = {

    }
    this.plans = {
      basic: "This is a basic plan",
      premium: "This is the premium plan"
    }
  }

  updateForm = event => {
    const { name, value } = event.target;
    
    this.setState({
        [name]: value 
    });
  }
  validateAndSubmit = (e) => {
    e.preventDefault();

    const { firstname, 
            lastname, 
            address, 
            email, 
            password, 
            passwordConfirm,
            plantype } = this.state;

    if (!(firstname &&
          lastname &&
          address &&
          email &&
          password &&
          passwordConfirm &&
          plantype)){
      return this.setErrMsg('All fields are required.');
    }
    if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      return this.setErrMsg('Invalid email')
    }
    const parentEventHandler = this.props.onSubmit.bind(this);
    parentEventHandler(e);
  }
  getPlanInfo = () => {
    return (this.state.plantype !== undefined) ? this.plans[this.state.plantype] : 'Please select a plan';
  }

  setErrMsg (msg) {
    return this.setState(() => {
      return {
        errorMsg: msg
      };
    });
  }

  render() {
    return (
      <form onSubmit={ this.validateAndSubmit } className="signup-form" onChange={ this.updateForm }>
        <div className="formitem">
          <p className="error-msg">
            { this.state.errorMsg }
          </p>
        </div>
        <div className="formitem">
          <label htmlFor="firstname">First Name: </label>
          <input id="firstname" name="firstname" type="text"></input>
        </div>
        <div className="formitem">
          <label htmlFor="lastname">Last Name: </label>
          <input id="lastname" name="lastname" type="text"></input>
        </div>
        <div className="formitem">
          <label htmlFor="address">Address: </label>
          <input id="address" name="address" type="text"></input>
        </div>
        <div className="formitem">
          <label htmlFor="email">Email: </label>
          <input id="email" name="email" type="text"></input>
        </div>
        <h3>Plan: </h3>
        <div className="formitem plan-selector">
          <label className="basic-plan">
            <input name="plantype" id="basic-plan" type="radio" value="basic"></input>
            <div><span>Basic</span></div>
          </label>
          <label className="premium-plan">
            <input name="plantype" id="premium-plan" type="radio" value="premium"></input>
            <div><span>Premium</span></div>
          </label>
        </div>
        <div className="formitem">
          <p>{ this.getPlanInfo() }</p>
        </div>
        <div className="formitem">
          <input type="submit" value="Sign up"/>
        </div>
      </form>
    )
  }
}

export default SignupForm
