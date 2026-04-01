import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import './dashboard.css';

function Dashboard({ userUsername, setIsLoggedIn }) {
  const [small, setSmall] = useState(true);

  return (
    <div className='dashboard-container'>
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <SideBar username={userUsername} small={small} setSmall={setSmall} />
      <div className={`page-container ${small ? 'page-container-small' : 'page-container-large'}`}>
        <Routes>
          <Route path='/home' element={<div>HomePage</div>} />
          <Route path='/favorites' element={<div>Favorites</div>} />
          <Route path='/watchlater' element={<div>WatchLater</div>} />
          <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
