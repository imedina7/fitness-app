import React from 'react'
import SignupForm from '../forms/signup/SignupForm';

export default function SignupPage(props) {
  return (
    <section className="signup-modal">
      <div className="wrapper">
        <h2 data-testid="signup-page-title">Sign up:</h2>
        <SignupForm onSubmit={ props.onSubmit }/>
      </div>
    </section>
  )
}
