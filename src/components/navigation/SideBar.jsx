import { faFolder, faStar } from '@fortawesome/free-solid-svg-icons';
import { faClockFour } from '@fortawesome/free-solid-svg-icons/faClockFour';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Activity from '../Activity';
import './navigation.css';

function SideBar({ username, small, setSmall, activities = [] }) {
  const [selected, setSelected] = useState('Home');
  const navigate = useNavigate();

  function setPage(pageName) {
    setSelected(pageName);
    if (pageName === 'Home') navigate('/home');
    else if (pageName === 'Favorites') navigate('/favorites');
    else if (pageName === 'Watch Later') navigate('/watchlater');
  }

  return (
    <nav
      className={`sidebar-nav ${small ? 'sidebar-small' : 'sidebar-large'}`}
      onMouseEnter={() => setSmall(false)}
      onMouseLeave={() => setSmall(true)}
    >
      <ul className="sidebar-list">
        <li
          className={`sidebar-item ${selected === 'Home' ? 'sidebar-item-selected' : ''}`}
          onClick={() => setPage('Home')}
        >
          <FontAwesomeIcon icon={faFolder} />
          <span className="sidebar-label">Home</span>
        </li>
        <li
          className={`sidebar-item ${selected === 'Favorites' ? 'sidebar-item-selected' : ''}`}
          onClick={() => setPage('Favorites')}
        >
          <FontAwesomeIcon icon={faStar} />
          <span className="sidebar-label">Favorites</span>
        </li>
        <li
          className={`sidebar-item ${selected === 'Watch Later' ? 'sidebar-item-selected' : ''}`}
          onClick={() => setPage('Watch Later')}
        >
          <FontAwesomeIcon icon={faClockFour} />
          <span className="sidebar-label">Watch Later</span>
        </li>
      </ul>
      <div className={`sidebar-activities ${small ? 'sidebar-activities-hidden' : ''}`}>
        <h2>Latest Activities</h2>
        <ul className="movie-list">
          {activities.slice(0, 10).map((activity, index) => (
            <Activity
              key={index}
              username={activity.user?.username || username}
              movieTitle={activity.title?.title || activity.movieTitle}
              activityType={activity.activityType}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default SideBar;
