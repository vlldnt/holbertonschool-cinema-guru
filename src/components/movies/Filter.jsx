import SearchBar from '../general/SearchBar';
import Input from '../general/Input';
import SelectInput from '../general/SelectInput';
import Tag from './Tag';
import './movies.css';

const GENRES_LIST = [
  'action',
  'drama',
  'comedy',
  'biography',
  'romance',
  'thriller',
  'war',
  'history',
  'sport',
  'sci-fi',
  'documentary',
  'crime',
  'fantasy',
];

const SORT_OPTIONS = ['Latest', 'Oldest', 'Highest Rated', 'Lowest Rated'];

function Filter({
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  sort,
  setSort,
  genres,
  setGenres,
  title,
  setTitle,
}) {
  return (
    <div className="filter-container">
        <div className="inputs-filter">
          <SearchBar title={title} setTitle={setTitle} />
          <div className="inputs-line">
            <Input
              label="Min Date:"
              type="number"
              value={minYear}
              setValue={setMinYear}
            />
            <Input
              label="Max Date :"
              type="number"
              value={maxYear}
              setValue={setMaxYear}
            />
            <SelectInput
              label="Sort:"
              value={sort}
              setValue={setSort}
              options={SORT_OPTIONS}
            />
          </div>
        </div>
        <ul className="genres-list">
          {GENRES_LIST.map((genre) => (
            <Tag
              key={genre}
              genre={genre}
              filter={true}
              genres={genres}
              setGenres={setGenres}
            />
          ))}
        </ul>
      </div>
  );
}

export default Filter;
