import { faFolder, faStar } from '@fortawesome/free-solid-svg-icons';
import { faClockFour } from '@fortawesome/free-solid-svg-icons/faClockFour';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Activity from '../Activity';
import './navigation.css';

const mockActivities = [
  { username: 'alice', movieTitle: 'Inception' },
  { username: 'bob', movieTitle: 'The Dark Knight' },
  { username: 'carol', movieTitle: 'Interstellar' },
  { username: 'dave', movieTitle: 'Pulp Fiction' },
  { username: 'eve', movieTitle: 'The Matrix' },
  { username: 'frank', movieTitle: 'Fight Club' },
  { username: 'grace', movieTitle: 'Forrest Gump' },
  { username: 'heidi', movieTitle: 'The Godfather' },
  { username: 'ivan', movieTitle: 'Goodfellas' },
  { username: 'judy', movieTitle: "Schindler's List" },
  { username: 'karl', movieTitle: 'The Silence of the Lambs' },
  { username: 'laura', movieTitle: 'Parasite' },
];

function SideBar({ username, small, setSmall }) {
  const [selected, setSelected] = useState('Home');
  const [activities, setActivities] = useState(mockActivities);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/activity')
      .then(response => {
        if (response.data && response.data.length > 0)
          setActivities(response.data);
      })
      .catch(() => {});
  }, []);

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
          {activities.slice(-10).map((activity, index) => (
            <Activity
              key={index}
              username={activity.username}
              movieTitle={activity.movieTitle}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default SideBar;
