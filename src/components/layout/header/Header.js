import React from 'react';
import { Link } from 'react-router-dom';

import ButtonLink from '../button-link/ButtonLink';
import SidebarButton from '../sidebar-button/SidebarButton';

import logo from '../../../assets/fitness-app-logo.svg';
import './Header.css';

const AppHeader = ({ onToggleMenuState }) => (
  <header className="App-header">
    <Link id="logo" to="/" data-testid="app-logo-link">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Fitness app</h1>
    </Link>
    <div id="menu" data-testid="app-menu-buttons">
      <ButtonLink title="Join" url="/join" />
      <SidebarButton onToggleMenuState={onToggleMenuState} />
    </div>
  </header>
);

export default AppHeader;
