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
      if (!accessToken) {
        setIsLoggedIn(false);
        return;
      }
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
      <main className="app-container">
        {isLoggedIn ? (
          <p style={{ color: "white" }}>Dashboard</p>
        ) : (
          <Authentication
            setIsLoggedIn={setIsLoggedIn}
            setUserUsername={setUserUsername}
          />
        )}
      </main>
    </>
  );
}

export default App;
