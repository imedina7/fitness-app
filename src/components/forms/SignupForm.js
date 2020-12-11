import React, { Component } from 'react'

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
  
  getPlanInfo = () => {
    return (this.state.plantype !== undefined) ? this.plans[this.state.plantype] : '';
  }
  render() {
    return (
      <form onSubmit={ this.props.onSubmit.bind(this) } onChange={ this.updateForm }>
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
          <h3>Plan: </h3>
          <label htmlFor="basic-plan">Basic</label>
          <input name="plantype" id="basic-plan" type="radio" value="basic"></input>
          <label htmlFor="premium-plan">Premium</label>
          <input name="plantype" id="premium-plan" type="radio" value="premium"></input>
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
