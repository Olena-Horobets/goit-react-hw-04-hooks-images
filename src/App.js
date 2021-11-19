import './commonStyles.css';

import { useState, useEffect } from 'react';
import { photoFinder } from './services/APIdataFetch';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from './components/Header/Header';
import { SearchForm } from './components/SearchForm/SearchForm';
import { Gallery } from './components/Gallery/Gallery';
import { Button } from './components/Button/Button';
import { Footer } from './components/Footer/Footer';
import { Modal } from './components/Modal/Modal';
import { LoadingViev } from './components/LoadingView/LoadingView';

function smoothScrollingTo(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({
    alignToTop: true,
    behavior: 'smooth',
    block: 'center',
  });
}

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function App() {
  const [status, setStatus] = useState(STATUS.IDLE);

  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);

  const [modal, setModal] = useState({
    isShown: false,
    imageUrl: '',
    alt: '',
  });

  // Methods for search handling
  const onFormSubmit = newValue => {
    setSearchValue(newValue);
    setPage(1);
  };

  const resetSearchData = () => {
    setStatus(STATUS.IDLE);
    setSearchValue('');
    setImages([]);
  };

  useEffect(() => {
    if (!searchValue) {
      resetSearchData();
      return;
    } else {
      setStatus(STATUS.PENDING);

      photoFinder
        .getFetchResponse(searchValue, page)
        .then(response => {
          try {
            page === 1
              ? setImages(response)
              : setImages(prev => [...prev, ...response]);

            setStatus(STATUS.RESOLVED);
            smoothScrollingTo(String(response[0].id));
          } catch {
            throw Error;
          }
        })
        .catch(err => {
          toast.error(`Sorry, we couldn't find anything for you`);
          resetSearchData();
          setStatus(STATUS.REJECTED);
        });
    }
  }, [page, searchValue]);

  // Methods for components render
  const isLastPage = () => {
    return images.length < photoFinder.perPage;
  };

  const defineMainContent = () => {
    switch (status) {
      case STATUS.IDLE:
        return (
          <h2 className="reqest-message">...enter what are you looking for</h2>
        );

      case STATUS.PENDING:
        return <LoadingViev />;

      case STATUS.RESOLVED:
        return (
          <>
            <Gallery images={images} onCardClick={onGalleryCardClick} />
            {!isLastPage() && (
              <Button
                type="button"
                styledClass="btn"
                text="Load more"
                onClick={() => {
                  setPage(prev => prev + 1);
                }}
              />
            )}
          </>
        );

      case STATUS.REJECTED:
        return <div className="rejest-image"></div>;

      default:
        setStatus(STATUS.IDLE);
    }
  };

  // Methods for modal window
  const onGalleryCardClick = e => {
    const url = e.currentTarget.getAttribute('datasrc');
    const alt = e.currentTarget.getAttribute('dataalt');
    toggleModal(url, alt);
  };

  const toggleModal = (imageUrl = '', alt = '') => {
    setModal(prev => ({ ...prev, isShown: !prev.isShown, imageUrl, alt }));
  };

  // RENDER ITSELF
  return (
    <div className={modal.isShown ? 'AppFixed' : 'App'} id="App">
      <ToastContainer theme="colored" icon={true} limit={1} />
      <Header />
      <div className="container">
        <SearchForm
          onSubmit={onFormSubmit}
          notify={toast.error}
          onReset={resetSearchData}
        />
        {defineMainContent()}
      </div>
      <Footer />
      {modal.isShown && (
        <Modal
          src={modal.imageUrl}
          alt={modal.alt}
          onModalClose={toggleModal}
        />
      )}
    </div>
  );
}

export default App;
