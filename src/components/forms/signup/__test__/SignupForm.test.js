import React from 'react';
import ReactDOM from 'react-dom';
import SignupForm from '../SignupForm';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignupForm />, div);
})

it('has all fields', () => {
    const { getByTestId } = render(<SignupForm />);
    const firstnameField = getByTestId('firstname-field');
    const lastnameField = getByTestId('lastname-field');
    const addressField = getByTestId('address-field');
    const emailField = getByTestId('email-field');
    
    expect(firstnameField).toBeInTheDocument();
    expect(lastnameField).toBeInTheDocument();
    expect(addressField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    
})

it('has options to select plan', () => {
    const { getByTestId } = render(<SignupForm />);
    const basicOption = getByTestId('basicplan-option');
    const premiumOption = getByTestId('premiumplan-option');
    
    expect(basicOption).toBeInTheDocument();
    expect(premiumOption).toBeInTheDocument();
})

it('has submit button', () => {
    const { getByTestId } = render(<SignupForm />);
    const submitButton = getByTestId('submit-btn');
        
    expect(submitButton).toBeInTheDocument();
})

it('has plan info paragraph', () => {
    const { getByTestId } = render(<SignupForm />);
    const planParagraph = getByTestId('plan-info-paragraph');
        
    expect(planParagraph).toBeInTheDocument();
})