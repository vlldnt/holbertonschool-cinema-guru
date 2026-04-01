import { useState } from 'react';
import Tag from '../../components/movies/Tag';
import './../../components/movies/movies.css'

const GENRES_LIST = [
  'Action',
  'Drama',
  'Comedy',
  'Biography',
  'Romance',
  'Thriller',
  'War',
  'History',
  'Sport',
  'Sci-Fi',
  'Documentary',
  'Crime',
  'Fantasy',
];

function HomePage() {
  const [genres, setGenres] = useState([]);

  return (
    <div className="homepage-container">
      <div className="homepage-filters">
        
      </div>
      <ul className='genres-list'>
        {GENRES_LIST.map((genre) => (
          <Tag key={genre} genre={genre} genres={genres} setGenres={setGenres} />
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
