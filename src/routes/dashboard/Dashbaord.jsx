import { useState, useEffect, useCallback } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import HomePage from './HomePage';
import Favorites from './FavoritesPage';
import WatchlaterPage from './WatchlaterPage';
import './dashboard.css';

function Dashboard({ userUsername, setIsLoggedIn }) {
  const [small, setSmall] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [watchLater, setWatchLater] = useState([]);
  const [activities, setActivities] = useState([]);

  const tok = localStorage.getItem('accessToken');
  const headers = { Authorization: `Bearer ${tok}` };

  const fetchAll = useCallback(async () => {
    try {
      const [favRes, wlRes, actRes] = await Promise.all([
        axios.get('/api/titles/favorite/', { headers }),
        axios.get('/api/titles/watchlater/', { headers }),
        axios.get('/api/activity', { headers }),
      ]);
      setFavorites(favRes.data || []);
      setWatchLater(wlRes.data || []);
      setActivities(actRes.data || []);
    } catch (_) {}
  }, [tok]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return (
    <div className="dashboard-container">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <SideBar username={userUsername} small={small} setSmall={setSmall} activities={activities} />
      <div className={`page-container ${small ? 'page-container-small' : 'page-container-large'}`}>
        <Routes>
          <Route path="/home" element={<HomePage favorites={favorites} watchLater={watchLater} refreshLists={fetchAll} />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} watchLater={watchLater} refreshLists={fetchAll} />} />
          <Route path="/watchlater" element={<WatchlaterPage favorites={favorites} watchLater={watchLater} refreshLists={fetchAll} />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
