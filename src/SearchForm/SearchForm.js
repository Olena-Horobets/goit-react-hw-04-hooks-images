import './SearchForm.css';
import { Component } from 'react';

class SearchForm extends Component {
  render() {
    return (
      <form class="search-form" id="search-form">
        <input
          class="search-form__input"
          type="text"
          name="query"
          autocomplete="off"
          placeholder="Search images..."
        />
        <button class="btn search-form__btn" type="submit">
          Search
        </button>
        <button
          class="btn search-form__btn"
          type="button"
          data-action="reset"
          disabled
        >
          Reset
        </button>
      </form>
    );
  }
}

export { SearchForm };
