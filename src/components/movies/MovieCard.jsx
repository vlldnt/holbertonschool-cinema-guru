import { faClockFour, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Tag from './Tag';
import './movies.css';

function MovieCard({ movie = {}, favorites = [], watchLater = [], refreshLists }) {
  const isFavorite = favorites.some((m) => m.imdbId === movie.imdbId);
  const isWatchLater = watchLater.some((m) => m.imdbId === movie.imdbId);

  function handleClick(type) {
    const isActive = type === 'favorite' ? isFavorite : isWatchLater;
    const method = isActive ? 'delete' : 'post';

    axios[method](`/api/titles/${type}`, { imdbId: movie.imdbId })
      .then(() => refreshLists())
      .catch(() => {});
  }

  return (
    <li className="movie-card">
      <div className="card-image-container">
        <div className="card-icons">
          <FontAwesomeIcon
            icon={faStar}
            className={isFavorite ? 'icon-active' : 'icon'}
            onClick={() => handleClick('favorite')}
          />
          <FontAwesomeIcon
            icon={faClockFour}
            className={isWatchLater ? 'icon-active' : 'icon'}
            onClick={() => handleClick('watchlater')}
          />
        </div>
        {movie.imageurls && movie.imageurls[0] && (
          <img className="card-image" src={movie.imageurls[0]} alt={movie.title} />
        )}
        <h2 className="card-title">{movie.title}</h2>
      </div>
      <p className="card-synopsis">{movie.synopsis}</p>
      <ul className="genres-card">
        {movie.genres && movie.genres.map((genre) => (
          <Tag key={genre} genre={genre} filled={true} />
        ))}
      </ul>
    </li>
  );
}

export default MovieCard;
