import axios from 'axios';
import { useState } from 'react';
import './auth.css';
import Login from './Login';
import Register from './Register';

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage('Username or password empty');
      return;
    }

    try {
      const res = await axios.post(
        _switch
          ? '/api/auth/login'
          : '/api/auth/register',
        { username, password },
      );
      if (res.data.accessToken) {
        localStorage.setItem('accessToken', res.data.accessToken);
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;
        setUserUsername(username);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
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
