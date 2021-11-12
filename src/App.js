import { Component } from 'react';

import { Header } from 'Header/Header';
import { SearchForm } from 'SearchForm/SearchForm';
import { ImageGallery } from 'ImageGallery/ImageGallery';
import { Footer } from './Footer/Footer';

class App extends Component {
  state = {
    searchValue: '',
    status: 'idle',
  };

  onSearchSubmit = searchValue => {
    this.setState({ searchValue });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <SearchForm onSubmit={this.onSearchSubmit} />
          {this.state.searchValue ? (
            <ImageGallery searchValue={this.state.searchValue} />
          ) : null}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
