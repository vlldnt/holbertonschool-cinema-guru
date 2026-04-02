import { useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import Filter from '../../components/movies/Filter';
import MovieCard from '../../components/movies/MovieCard';
import Button from '../../components/general/Button';

function HomePage({ favorites, watchLater, refreshLists }) {
  const [title, setTitle] = useState('');
  const [minYear, setMinYear] = useState('');
  const [maxYear, setMaxYear] = useState('');
  const [sort, setSort] = useState('');
  const [genres, setGenres] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const tok = localStorage.getItem('accessToken');

  const fetchMovies = useCallback(async (currentPage) => {
    try {
      const params = { page: currentPage };
      if (title) params.title = title;
      if (minYear) params.minYear = Number(minYear);
      if (maxYear) params.maxYear = Number(maxYear);
      if (sort) params.sort = sort;
      if (genres.length > 0) params.genres = genres.join(',');

      const query = new URLSearchParams(params).toString();
      const res = await axios.get(`/api/titles/advancedsearch/?${query}`, {
        headers: { Authorization: `Bearer ${tok}` },
      });

      const results = res.data.titles || [];
      setHasMore(results.length === 10);
      return results;
    } catch (error) {
      console.log(error);
      return [];
    }
  }, [title, minYear, maxYear, sort, genres, tok]);

  useEffect(() => {
    fetchMovies(1).then(results => {
      setDisplayedMovies(results);
      setPage(1);
    });
  }, [fetchMovies]);

  async function handleLoadMore() {
    const nextPage = page + 1;
    const results = await fetchMovies(nextPage);
    setDisplayedMovies(prev => [...prev, ...results]);
    setPage(nextPage);
  }

  return (
    <div className="homepage-container">
      <Filter
        title={title} setTitle={setTitle}
        minYear={minYear} setMinYear={setMinYear}
        maxYear={maxYear} setMaxYear={setMaxYear}
        sort={sort} setSort={setSort}
        genres={genres} setGenres={setGenres}
      />
      <div className="movies-displayed">
        {displayedMovies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} favorites={favorites} watchLater={watchLater} refreshLists={refreshLists} />
        ))}
      </div>
      {hasMore && (
        <Button label="Load More..." onClick={handleLoadMore} />
      )}
    </div>
  );
}

export default HomePage;
