import './SearchForm.css';
import { Component } from 'react';
import { Button } from 'Button/Button';

class SearchForm extends Component {
  state = {
    value: '',
  };

  handleInputChange = e => {
    this.setState({ value: e.currentTarget.value.toLowerCase().trim() });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
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
          autofocus="true"
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
          disabled
          text="Reset"
        />
      </form>
    );
  }
}

export { SearchForm };
