import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import './App.css';

// Layout components
import AppHeader from './layout/header/Header';
import Sidebar from './layout/sidebar/Sidebar';

// Page components
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import AdminPage from './pages/admin/AdminPage';

import { formEvents } from '../lib/eventHandlers';

const { useState } = React;

function App() {
  const [sidebarOpenState, setSidebarOpenState] = useState(false);
  const history = useHistory();
  return (
    <div className="App">
      <AppHeader
        onToggleMenuState={(e, isMenuOpen) => {
          setSidebarOpenState(isMenuOpen);
        }}
      />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/join">
        <SignupPage
          onSubmit={async (e) => {
            await formEvents.submitSignupForm(e);
            history.push('/');
          }}
        />
      </Route>
      <Route path="/map">
        <MapPage />
      </Route>
      <Route path="/admin">
        <AdminPage />
      </Route>
      <Sidebar isOpen={sidebarOpenState} />
    </div>
  );
}

export default App;
