import 'regenerator-runtime/runtime.js';

import { Notify, Loading } from 'notiflix';
import './notiflix-styles';
const { success, warning, failure, info } = Notify;

import refs from './refs.js';
import photoFinder from './fetchApi.js';
import galleryItemTpl from '../templates/gallery-item.hbs';

import modal from './light-box';

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  Loading.standard();
  const value = e.currentTarget.elements.query.value.trim();
  if (value === '') {
    onServerResponse(failure, 'Please, enter valid query!');
    Loading.remove();
    return;
  }

  refs.resetBtn.disabled = false;
  refs.resetBtn.addEventListener('click', onReset);
  refs.message.classList.add('is-hidden');

  try {
    onNewFetch(value);
    fetchAndRender();
  } catch (err) {
    console.log(err);
    Loading.remove();
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
  Loading.standard();
  const response = await fetch(photoFinder.getFetchUrl())
    .then(res => res.json())
    .then(data => {
      if (data.totalHits === 0) {
        onServerResponse(warning, `Sorry, we couldn't find anything for you(`);
        onReset();
        return;
      }
      onServerResponse(success, `Hooray! We found ${data.totalHits} images.`);

      const markup = galleryItemTpl(data.hits);
      onMarkupRender(markup);
      photoFinder.setNextPage();
      Loading.remove();
      refs.loadMoreBtn.classList.remove('is-hidden');
      refs.loadMoreBtn.addEventListener('click', fetchAndRender);

      modal.srcList = data.hits;

      refs.gallery.addEventListener('click', modal.onModalOpen.bind(modal));
    });
}

function onNewFetch(value = '') {
  photoFinder.searcQuery = value;
  photoFinder.resetPage();
  refs.gallery.innerHTML = '';

  refs.loadMoreBtn.classList.add('is-hidden');
  refs.loadMoreBtn.removeEventListener('click', fetchAndRender);
}

function onReset() {
  refs.searchForm.elements.query.value = '';
  onNewFetch();
  refs.message.classList.remove('is-hidden');
  refs.resetBtn.disabled = true;
  refs.resetBtn.removeEventListener('click', onReset);
  Loading.remove();
}
