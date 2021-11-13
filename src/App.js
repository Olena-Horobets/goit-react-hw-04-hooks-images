import { Component } from 'react';
import { photoFinder } from 'API';

import { Header } from 'Header/Header';
import { SearchForm } from 'SearchForm/SearchForm';
import { Gallery } from 'Gallery/Gallery';
import { Button } from 'Button/Button';
import { Footer } from './Footer/Footer';
import { Modal } from 'Modal/Modal';

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
    modal: {
      isShown: false,
      imageUrl: '',
    },
  };

  onSearchSubmit = searchValue => {
    this.setState({ searchValue });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevState.searchValue;
    const newValue = this.state.searchValue;

    if (prevValue !== newValue) {
      photoFinder.resetPage();

      if (!newValue) {
        this.resetSearchData();
        return;
      }

      photoFinder.getFetchResponse(newValue).then(response => {
        if (response.length === 0) {
          console.log(`Sorry, we couldn't find anything for you(`);
          return;
        }
        this.setState(() => {
          return { images: [...response] };
        });
        try {
          smoothScrollingTo(String(response[0].id));
        } catch {}
      });
    }
  }

  onGalleryCardClick = e => {
    const url = e.currentTarget.getAttribute('datasrc');
    this.toggleModal(url);
  };

  resetSearchData = () => {
    this.setState({
      searchValue: '',
      images: [],
    });
  };

  isLastPage = () => {
    return this.state.images.length < photoFinder.perPage;
  };

  toggleModal = (imageUrl = '') => {
    this.setState(({ modal }) => {
      return { modal: { isShown: !modal.isShown, imageUrl } };
    });
  };

  onLoadMore = () => {
    const { searchValue } = this.state;
    photoFinder.setNextPage();
    photoFinder.getFetchResponse(searchValue).then(response => {
      if (response.length === 0) {
        console.log(`Sorry, we couldn't find anything for you(`);
        return;
      }
      this.setState(({ images }) => {
        return { images: [...images, ...response] };
      });
      try {
        smoothScrollingTo(String(response[0].id));
      } catch {}
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
          {!this.isLastPage() ? (
            <Button
              type="button"
              class="btn load-more"
              text="Load more"
              onClick={this.onLoadMore}
            />
          ) : null}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
