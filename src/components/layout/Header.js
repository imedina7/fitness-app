import logo from '../../assets/fitness-app-logo.svg';
import './Header.css';
import Button from './Button'

const AppHeader = () => {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Fitness app</h1>
        <div>
          <Button title="Join" type="default" url='#/join'/>
        </div>
      </header>
    )
}

export default AppHeader
