import { useState } from 'react';

function Tag({ genre, filter, genres = [], setGenres }) {
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

  return <li className={`tag-item${selected ? ' selected-item' : ''}`} onClick={handleTag}>{genre}</li>;
}

export default Tag;
