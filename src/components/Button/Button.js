import s from './Button.module.css';

import { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
      <button
        className={s[this.props.class]}
        type={this.props.type}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  class: PropTypes.string.isRequired,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export { Button };
