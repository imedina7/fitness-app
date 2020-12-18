import React from 'react';
import SignupForm from '../forms/signup/SignupForm';

export default function SignupPage({ onSubmit }) {
  return (
    <section className="signup-modal">
      <div className="wrapper">
        <h2 data-testid="signup-page-title">Sign up:</h2>
        <SignupForm itemToEdit={{}} onSubmit={onSubmit} />
      </div>
    </section>
  );
}
