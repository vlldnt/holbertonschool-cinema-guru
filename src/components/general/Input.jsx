import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./general.css"

function Input({
  label,
  type = 'text',
  className = '',
  value,
  setValue,
  icon,
  inputAttributes = {},
}) {
  function handleInput(event) {
    setValue(event.target.value);
  }

  return (
    <div className={`input-container ${className}`}>
      <div className="label-icon">
        {icon && (
          <span className="input-icon" aria-hidden="true">
            <FontAwesomeIcon icon={icon} />
          </span>
        )}

        {label && <label className="input-label">{label}</label>}
      </div>

      <input
        className="input"
        type={type}
        value={value}
        onChange={handleInput}
        {...inputAttributes}
      />
    </div>
  );
}

export default Input;
