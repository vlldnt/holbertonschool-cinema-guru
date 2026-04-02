import { useState } from 'react';

function Tag({ genre, filter, genres = [], setGenres, filled }) {
  const [selected, setSelected] = useState(false);

  function handleTag() {
    if (selected) {
      setGenres(genres.filter(g => g !== genre));
      setSelected(false);
    } else {
      setGenres([...genres, genre]);
      setSelected(true);
    }
  }

  return <li className={`tag-item${selected ? ' selected-item' : ''}${filled ? ' filled' : ''}`} onClick={handleTag}>{genre}</li>;
}

export default Tag;
