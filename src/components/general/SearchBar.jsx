import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ title, setTitle }) {
  function handleInput(event) {
    setTitle(event.target.value);
  }

  return (
    <div className="search-bar">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input
        type="text"
        placeholder="Search Movies"
        value={title}
        onChange={handleInput}
      />
    </div>
  );
}

export default SearchBar;
