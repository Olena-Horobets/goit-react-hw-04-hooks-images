import { Component } from 'react';

import { Header } from 'Header/Header';
import { SearchForm } from 'SearchForm/SearchForm';
import { ImageGallery } from 'ImageGallery/ImageGallery';
import { Footer } from './Footer/Footer';

import photoFinder from './API';

class App extends Component {
  state = {
    searchValue: '',
    images: [],
    status: 'idle',
  };

  onSearchSubmit = value => {
    this.setState({ searchValue: value });
  };

  componentDidMount() {
    photoFinder.searcQuery = this.state.searchValue;
    fetch(photoFinder.getFetchUrl())
      .then(res => res.json())
      .then(data => console.log(data.hits));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <SearchForm onSubmit={this.onSearchSubmit} />
          {this.state.searchValue ? (
            <ImageGallery images={this.state.images} />
          ) : null}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
