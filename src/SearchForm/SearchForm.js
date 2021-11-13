import './SearchForm.css';

import { Component } from 'react';

import { Button } from 'Button/Button';

class SearchForm extends Component {
  state = {
    value: '',
  };

  handleInputChange = e => {
    this.setState({ value: e.currentTarget.value.toLowerCase() });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (!this.state.value.trim().length) {
      this.props.notify('ENTER SOMETHING');
      this.resetInput();
      return;
    }
    this.props.onSubmit(this.state.value);
  };

  resetInput = () => {
    this.setState({ value: '' });
    this.props.onSubmit('');
  };

  render() {
    return (
      <form
        className="search-form"
        id="search-form"
        onSubmit={this.handleFormSubmit}
      >
        <input
          onChange={this.handleInputChange}
          value={this.state.value}
          className="search-form__input"
          type="text"
          name="query"
          autoComplete="off"
          autoFocus={true}
          placeholder="Search images..."
        />
        <Button
          class="btn search-form__btn"
          type="submit"
          disabled={!this.state.value.length}
          text="Search"
        />
        <Button
          class="btn search-form__btn"
          type="button"
          action="reset"
          disabled={!this.state.value}
          text="Reset"
          onClick={this.resetInput}
        />
      </form>
    );
  }
}

export { SearchForm };
