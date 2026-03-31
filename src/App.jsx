import { useEffect, useState } from 'react';
import axios from 'axios';
import Authentication from './routes/auth/Authentication';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    (async () => {
      const accessToken = localStorage.getItem('accessToken');
      try {
        const res = await axios.post(
          '/api/auth/',
          {},
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          },
        );
        setIsLoggedIn(true);
        setUserUsername(res.data.username);
      } catch (error) {
        setIsLoggedIn(false);
      }
    })();
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <p>Dashboard</p>
      ) : (
        <Authentication
          setIsLoggedIn={setIsLoggedIn}
          setUserUsername={setUserUsername}
        />
      )}
    </>
  );
}

export default App;
