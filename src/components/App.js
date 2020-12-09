import { Route } from 'react-router-dom';
import './App.css';
import AppHeader from './layout/Header';
import SignupPage from './SignupPage';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/join">
        <SignupPage />
      </Route>
    </div>
  );
}

export default App;
