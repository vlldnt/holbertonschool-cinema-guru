import { useState, useEffect, useCallback } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import HomePage from './HomePage';
import Favorites from './FavoritesPage';
import './dashboard.css';
import WatchlaterPage from './WatchlaterPage';

function Dashboard({ userUsername, setIsLoggedIn }) {
  const [small, setSmall] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [watchLater, setWatchLater] = useState([]);

  const tok = localStorage.getItem('accessToken');

  const fetchLists = useCallback(async () => {
    try {
      const [favRes, wlRes] = await Promise.all([
        axios.get('/api/titles/favorite/', {
          headers: { Authorization: `Bearer ${tok}` },
        }),
        axios.get('/api/titles/watchlater/', {
          headers: { Authorization: `Bearer ${tok}` },
        }),
      ]);
      setFavorites(favRes.data || []);
      setWatchLater(wlRes.data || []);
    } catch (_) {}
  }, [tok]);

  useEffect(() => {
    fetchLists();
  }, [fetchLists]);

  return (
    <div className="dashboard-container">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <SideBar username={userUsername} small={small} setSmall={setSmall} />
      <div
        className={`page-container ${small ? 'page-container-small' : 'page-container-large'}`}
      >
        <Routes>
          <Route
            path="/home"
            element={
              <HomePage
                favorites={favorites}
                watchLater={watchLater}
                refreshLists={fetchLists}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                watchLater={watchLater}
                refreshLists={fetchLists}
              />
            }
          />
          <Route
            path="/watchlater"
            element={
              <WatchlaterPage
                favorites={favorites}
                watchLater={watchLater}
                refreshLists={fetchLists}
              />
            }
          />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
