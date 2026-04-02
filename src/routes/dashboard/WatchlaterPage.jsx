import MovieCard from '../../components/movies/MovieCard';
import './dashboard.css';

function WatchlaterPage({ favorites = [], watchLater = [], refreshLists }) {
  return (
    <div className="watchlater-container">
      <h1 className="watchlater-title">MOVIES TO WATCH LATER</h1>
      <div className="movies-displayed">
        {watchLater.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} favorites={favorites} watchLater={watchLater} refreshLists={refreshLists} />
        ))}
      </div>
    </div>
  );
}

export default WatchlaterPage;
