import { faFolder, faStar } from '@fortawesome/free-solid-svg-icons';
import { faClockFour } from '@fortawesome/free-solid-svg-icons/faClockFour';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SideBar({ username }) {
  const [selected, setSelected] = useState('home');
  const [small, setSmall] = useState(true);
  const [activities, setActivites] = useState([]);
  const [showActivites, setShowActivities] = useState(false);

  const navigate = useNavigate();

  function setPage(pageName) {
    setSelected(pageName);
    if (pageName === 'Home') navigate('/home');
    else if (pageName === 'Favorites') navigate('/favorites');
    else if (pageName === 'Watch Later') navigate('/watchlater');
  }
  return (
    <nav className="sidebar-nav">
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faFolder} />
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faStar} />
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faClockFour} />
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
