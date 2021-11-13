import './Button.css';

import { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button
        className={this.props.class}
        type={this.props.type}
        action={this.props.action}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}

export { Button };
