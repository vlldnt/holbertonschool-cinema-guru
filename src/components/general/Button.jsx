import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button({ label, className = '', onClick, icon }) {
  function handleClick(event) {
    if (onClick) {
      onClick(event);
    }
  }
  return (
    <>
      <button
        label={label}
        className={`button button-${className}`}
        onClick={handleClick}
      >
        {icon && (
          <span className="button-icon" aria-hidden="true">
            <FontAwesomeIcon icon={icon} />
          </span>
        )}

        {label && <span className="button-label">{label}</span>}
      </button>
    </>
  );
}

export default Button;
