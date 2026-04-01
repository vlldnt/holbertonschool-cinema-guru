import './components.css';

const date = new Date();
const formattedDate = date.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

function Activity({ username, movieTitle }) {
  return (
    <>
      <li className='activity-item'>
        <p>
          <span className="span-activity">{username}</span> added{' '}
          <span className="span-activity">{movieTitle}</span> to watch
          later - <span className="date-activity">{formattedDate}</span>
        </p>
      </li>
    </>
  );
}

export default Activity;
