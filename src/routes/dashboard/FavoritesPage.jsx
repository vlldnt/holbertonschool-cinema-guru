import MovieCard from '../../components/movies/MovieCard';
import './dashboard.css';

function Favorites({ favorites = [], watchLater = [], refreshLists }) {
  return (
    <div className="favorites-container">
      <h1 className="favorites-title">MOVIES YOU LIKE</h1>
      <div className="movies-displayed">
        {favorites.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} favorites={favorites} watchLater={watchLater} refreshLists={refreshLists} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
