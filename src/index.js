import './sass/main.scss';

import 'regenerator-runtime/runtime.js';

import { Notify, Loading } from 'notiflix';
import './js/notiflix-styles';
const { success, warning, failure, info } = Notify;

import refs from './js/refs';
import photoFinder from './js/fetchApi';
import galleryItemTpl from './templates/gallery-item.hbs';

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const value = e.currentTarget.elements.query.value;

  if (value === '') {
    onServerResponse(failure, 'Please, enter valid query!');
    return;
  }

  photoFinder.searcQuery = value;

  try {
    // const response = await fetch(photoFinder.getFetchUrl())
    //   .then(res => res.json())
    //   .then(data => {
    //     onServerResponse(info, `Hooray! We found ${data.totalHits} images.`);
    //     console.log(data.hits);
    //     const markup = galleryItemTpl(data.hits);
    //     onMarkupRender(markup);
    //     refs.loadMoreBtn.classList.remove('is-hidden');
    //     refs.loadMoreBtn.addEventListener('click', onLoadMoreClick);
    //   });
    fetchAndRender();
    refs.loadMoreBtn.classList.remove('is-hidden');
    refs.loadMoreBtn.addEventListener('click', fetchAndRender);
  } catch (err) {
    console.log(err);
    onServerResponse(failure, 'Please, enter valid query!');
  }
}

function onServerResponse(cb, message) {
  cb(message);
}

function onMarkupRender(list) {
  refs.gallery.insertAdjacentHTML('beforeend', list);
}

async function fetchAndRender() {
  const response = await fetch(photoFinder.getFetchUrl())
    .then(res => res.json())
    .then(data => {
      onServerResponse(info, `Hooray! We found ${data.totalHits} images.`);
      console.log(data.hits);

      const markup = galleryItemTpl(data.hits);
      onMarkupRender(markup);
      photoFinder.setNextPage();
    });
}

function onLoadMoreClick(e) {}
