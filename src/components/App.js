import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import AppHeader from './layout/Header';
import SignupPage from './SignupPage';
import HomePage from './HomePage';
import Sidebar from './layout/Sidebar';

const submitSignupForm = function (e) {
  e.preventDefault();
  console.log(this.state);
}

const { useState } = React;

function App() {
  const [ sidebarOpenState, setSidebarOpenState ] = useState(false);
  return (
    <div className="App">
      <AppHeader onToggleMenuState={ (e, isMenuOpen) => {
        setSidebarOpenState(isMenuOpen);
      }}/>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/join">
        <SignupPage onSubmit={ submitSignupForm }/>
      </Route>
    <Sidebar isOpen={ sidebarOpenState }/>
    </div>
  );
}

export default App;
