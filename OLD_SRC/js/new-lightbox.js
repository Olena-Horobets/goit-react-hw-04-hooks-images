import refs from './refs.js';
import { Notify, Loading } from 'notiflix';
import modalTpl from '../templates/modal.hbs';
import './notiflix-styles';
const { failure } = Notify;

class LightBoxModal {
  constructor() {
    this._srcList = [];
    this.currentIdx = 0;

    this.image = null;

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
        refs.modal.insertAdjacentHTML(
          'beforeend',
          modalTpl(this._srcList[this.currentIdx]),
        );
        Loading.remove();

        console.log(1);

        refs.modal.addEventListener('click', this.arrowSwipe);

        // window.addEventListener('keydown', this.keyboardSwipe);
        console.log(2);
        // refs.modal.addEventListener('click', this.modalClose);
        // window.addEventListener('keydown', this.keyboardClose);
      } catch (err) {
        Loading.remove();
        failure('Please, enter valid query!');
      }
    }
  }

  changeModalImage() {}
  // swiping left-right
  onArrowClick(e) {
    Loading.standard();
    if (e.target.getAttribute('data-action') === 'thumb-left') {
      this.decreaseIdx();
      console.log(this.currentIdx);
    } else if (e.target.getAttribute('data-action') === 'thumb-right') {
      this.increaseIdx();
      console.log(this.currentIdx);

      const image = document.querySelector('.lightbox__content');

      function changeImage(el) {
        const oldIm = new Promise(resolve => {
          image.classList.add('on-fade-left');
        });

        const newIm = new Promise(resolve => {
          refs.modal.insertAdjacentHTML('beforeend', modalTpl(el));
          const newImage = refs.modal.children[refs.modal.children.length - 1];
          newImage.classList.add('on-emerge-left');
        });

        return Promise.all([oldIm, newIm]);
      }
      async function deleteImage(el) {
        const res = await changeImage(el);
        const timeoutId = await setTimeout(refs.modal.removeChild(image), 400);
        console.log(timeoutId);
        clearTimeout(timeoutId);
        // return res;
      }
      deleteImage(this._srcList[this.currentIdx]);

      // refs.modal.removeChild(this.image);
      // const removeImage = setTimeout(this.image.remove(), 800);
      // clearTimeout(removeImage);
      console.log();
    }
    Loading.remove();

    // this.setImageData();
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
