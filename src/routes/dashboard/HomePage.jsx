import { useState } from 'react';
import Filter from '../../components/movies/Filter';
import MovieCard from '../../components/movies/MovieCard';

const TEST_MOVIE = {
  imdbId: 'tt0111161',
  title: 'The Shawshank Redemption',
  synopsis:
    'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
  genres: ['drama', 'crime'],
  imageurls: [
    'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg',
  ],
};

function HomePage() {
  const [title, setTitle] = useState('');
  const [minYear, setMinYear] = useState('');
  const [maxYear, setMaxYear] = useState('');
  const [sort, setSort] = useState('');
  const [genres, setGenres] = useState([]);

  return (
    <div className="homepage-container">
      <Filter
        title={title}
        setTitle={setTitle}
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        sort={sort}
        setSort={setSort}
        genres={genres}
        setGenres={setGenres}
      />
      <MovieCard movie={TEST_MOVIE} />
    </div>
  );
}

export default HomePage;
