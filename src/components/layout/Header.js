import logo from '../../assets/fitness-app-logo.svg';
import './Header.css';
import ButtonLink from './ButtonLink'
import { Link } from 'react-router-dom';
import SidebarButton from './SidebarButton';

const AppHeader = (props) => {
    return (
      <header className="App-header">
        <Link id="logo" to="/">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Fitness app</h1>
        </Link>
        <div id="menu">
          <ButtonLink title="Join" url='/join'/>
          <SidebarButton onToggleMenuState={ props.onToggleMenuState }/>
        </div>
      </header>
    )
}

export default AppHeader
