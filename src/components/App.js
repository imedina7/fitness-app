import { Router } from 'react-router-dom';
import './App.css';
import AppHeader from './layout/Header';
import SignupPage from './SignupPage';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Router path="/join">
        <SignupPage />
      </Router>
    </div>
  );
}

export default App;
