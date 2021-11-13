import { Component } from 'react';
import { photoFinder } from 'API';

import { Header } from 'Header/Header';
import { SearchForm } from 'SearchForm/SearchForm';
import { Gallery } from 'Gallery/Gallery';
import { Button } from 'Button/Button';
import { Footer } from './Footer/Footer';
import { Modal } from 'Modal/Modal';

function URL(searchValue = '', page = 1) {
  return `https://pixabay.com/api/?key=22936688-6b3396d854cca2c3f8d0c7d41&q=${searchValue}&page=${page}&per_page=12&image_type=photo&orientation=horizontal&safesearch=true`;
}

function smoothScrollingTo(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({
    alignToTop: true,
    behavior: 'smooth',
    block: 'center',
  });
}

class App extends Component {
  state = {
    status: 'idle',
    searchValue: '',
    images: [],
    page: 1,
    modal: {
      isShown: false,
      imageUrl: '',
    },
  };

  setNextPage = () => {
    this.setState(({ page }) => {
      return { page: (page += 1) };
    });
  };

  resetPage = () => {
    this.setState({ page: 1 });
  };

  onSearchSubmit = searchValue => {
    this.setState({ searchValue });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevState.searchValue;
    const newValue = this.state.searchValue;
    const newPage = this.state.page;

    if (prevValue !== newValue) {
      fetch(photoFinder.getFetchUrl(newValue, newPage))
        .then(res => res.json())
        .then(data => {
          if (data.totalHits === 0) {
            console.log(`Sorry, we couldn't find anything for you(`);
            return;
          }

          this.setState(({ images }) => {
            return { images: [...data.hits] };
          });

          this.isLastPage(data.hits);
          smoothScrollingTo(String(data.hits[0].id));
        });
    }

    if (prevState.page !== newPage) {
      fetch(photoFinder.getFetchUrl(newValue, newPage))
        .then(res => res.json())
        .then(data => {
          this.setState(({ images }) => {
            return { images: [...images, ...data.hits] };
          });

          this.isLastPage(data.hits);
          smoothScrollingTo(String(data.hits[0].id));
        });
    }
  }

  onGalleryCardClick = e => {
    const url = e.currentTarget.getAttribute('datasrc');
    this.toggleModal(url);
  };

  // resetSearchData = value => {
  //   this.setState(() => {
  //     return {
  //       searchValue: value,
  //       // images: [],
  //       page: 1,
  //     };
  //   });
  // };

  isLastPage = length => {
    if (length < photoFinder.perPage) {
      console.log(`This was all we had for you, try something else, please`);
    }
  };

  toggleModal = (imageUrl = '') => {
    this.setState(({ modal }) => {
      return { modal: { isShown: !modal.isShown, imageUrl } };
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          {this.state.modal.isShown && (
            <Modal
              src={this.state.modal.imageUrl}
              alt="jhjhj"
              onModalClose={this.toggleModal}
            />
          )}
          <SearchForm onSubmit={this.onSearchSubmit} />
          {this.state.searchValue && (
            <Gallery
              images={this.state.images}
              onCardClick={this.onGalleryCardClick}
            />
          )}
          {this.state.searchValue && (
            <Button
              type="button"
              class="btn load-more"
              action="load-more"
              text="Load more"
              onClick={this.setNextPage}
            />
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
