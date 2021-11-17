import s from './Button.module.css';

import PropTypes from 'prop-types';

function Button({
  styledClass,
  type,
  text = '',
  disabled = false,
  onClick = null,
}) {
  return (
    <button
      className={s[styledClass]}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  styledClass: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export { Button };
