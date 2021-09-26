import refs from './refs.js';
import { Notify, Loading } from 'notiflix';
import './notiflix-styles';
const { failure } = Notify;

class LightBoxModal {
  constructor() {
    this._srcList = [];
    this.currentIdx = 0;

    this.keyboardSwipe = this.onKeyboardSwipePress.bind(this);
    this.arrowSwipe = this.onArrowClick.bind(this);
    this.modalClose = this.onBackdropOrBtnClose.bind(this);
    this.keyboardClose = this.onEscapePress.bind(this);
  }

  // service methods
  setNewIdx(id) {
    let element = this._srcList.find(el => String(el.id) === id);
    this.currentIdx = this._srcList.indexOf(element);
  }

  decreaseIdx() {
    this.currentIdx -= 1;
    if (this.currentIdx < 0) {
      this.currentIdx = this._srcList.length - 1;
    }
  }

  increaseIdx() {
    this.currentIdx += 1;
    if (this.currentIdx === this._srcList.length) {
      this.currentIdx = 0;
    }
  }

  set srcList(list) {
    this._srcList = list;
  }

  setImageData() {
    refs.image.src = this._srcList[this.currentIdx].largeImageURL;
    refs.image.alt = this._srcList[this.currentIdx].tags;
    Loading.remove();
  }

  // main event listener
  onModalOpen(e) {
    if (e.target.nodeName !== 'IMG') {
      return;
    } else {
      try {
        Loading.standard();
        refs.body.classList.add('body-fixed');
        refs.modal.classList.add('is-open');

        this.setNewIdx(e.target.id);
        this.setImageData();

        refs.modal.addEventListener('click', this.arrowSwipe);
        window.addEventListener('keydown', this.keyboardSwipe);

        refs.modal.addEventListener('click', this.modalClose);
        window.addEventListener('keydown', this.keyboardClose);
      } catch (err) {
        Loading.remove();
        failure('Please, enter valid query!');
      }
    }
  }

  // swiping left-right
  onArrowClick(e) {
    Loading.standard();
    if (e.target.getAttribute('data-action') === 'thumb-left') {
      this.decreaseIdx();
    } else if (e.target.getAttribute('data-action') === 'thumb-right') {
      this.increaseIdx();
    }
    this.setImageData();
  }

  onKeyboardSwipePress(e) {
    Loading.standard();
    if (e.code === 'ArrowLeft') {
      this.decreaseIdx();
      this.setImageData();
    } else if (e.code === 'ArrowRight') {
      this.increaseIdx();
      this.setImageData();
    } else {
      return;
    }
  }

  // closing methods
  closeModal() {
    refs.image.src = '';
    refs.modal.classList.remove('is-open');
    document.body.classList.remove('body-fixed');

    refs.modal.removeEventListener('click', this.arrowSwipe);
    window.removeEventListener('keydown', this.keyboardSwipe);

    refs.modal.removeEventListener('click', this.modalClose);
    window.removeEventListener('keydown', this.keyboardClose);
  }

  onBackdropOrBtnClose(e) {
    if (
      e.target.classList.contains('lightbox__overlay') ||
      e.target.getAttribute('data-action') === 'close-lightbox'
    ) {
      this.closeModal();
    } else {
      return;
    }
  }

  onEscapePress(e) {
    if (e.code !== 'Escape') {
      return;
    } else {
      this.closeModal();
    }
  }
}

const modal = new LightBoxModal();

export default modal;
