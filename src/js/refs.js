export default {
  body: document.querySelector('body'),

  searchForm: document.querySelector('#search-form'),
  resetBtn: document.querySelector('[data-action="reset"]'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
  gallery: document.querySelector('#gallery'),
  message: document.querySelector('.reqest-message'),

  modal: document.querySelector('.js-lightbox'),
  image: document.querySelector('.lightbox__image'),
};
// created class for whole modal functionality, including changing content of modal by keyboard or interface arrows and closing modal by interface button, clicking on backdrop and escape button
