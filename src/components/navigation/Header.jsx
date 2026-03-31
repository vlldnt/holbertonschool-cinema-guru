import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../general/Button';
import './navigation.css';

function Header({ userUsername, setIsLoggedIn }) {
  function logout() {
    localStorage.removeItem('accesstoken');
    setIsLoggedIn(false);
  }

  return (
    <>
      <header>
        <h1 className="header-title">Cinema Guru</h1>
        <nav className="header-nav">
          <img
            className="user-image"
            src="https://picsum.photos/100/100"
            alt=""
          />
          <p>Welcome, {userUsername} !</p>
          <span className="logout-container">
            <FontAwesomeIcon
              className="logout-icon"
              icon={faRightFromBracket}
            />
            <Button label="Logout" className="logout" onClick={logout} />
          </span>
        </nav>
      </header>
    </>
  );
}

export default Header;
