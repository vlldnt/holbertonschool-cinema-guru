import './components.css';

const activityLabels = {
  favorite: 'added to favorites',
  removeFavorited: 'removed from favorites',
  watchLater: 'added to watch later',
  removeWatchLater: 'removed from watch later',
};

function Activity({ username, movieTitle, activityType }) {
  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const label = activityLabels[activityType] || 'interacted with';

  return (
    <li className='activity-item'>
      <p>
        <span className="span-activity">{username}</span> {label}{' '}
        <span className="span-activity">{movieTitle}</span> -{' '}
        <span className="date-activity">{formattedDate}</span>
      </p>
    </li>
  );
}

export default Activity;
