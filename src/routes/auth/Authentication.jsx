import { useState } from 'react';
import './auth.css';
import Login from './Login';
import Register from './Register';

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className="auth-form">
      <button
        className={`auth-button ${_switch ? 'auth-button-active' : ''}`}
        type="button"
        onClick={() => setSwitch(true)}
      >
        Sign In
      </button>
      <button
        className={`auth-button ${!_switch ? 'auth-button-active' : ''}`}
        type="button"
        onClick={() => setSwitch(false)}
      >
        Sign Up
      </button>
      {_switch ? (
        <Login
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          setIsLoggedIn={setIsLoggedIn}
          setUserUsername={setUserUsername}
        />
      ) : (
        <Register
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          setIsLoggedIn={setIsLoggedIn}
          setUserUsername={setUserUsername}
        />
      )}
    </form>
  );
}

export default Authentication;
