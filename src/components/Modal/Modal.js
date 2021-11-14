import s from './Modal.module.css';

import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { ReactComponent as ReactSprite } from 'images/svg/sprite.svg';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscapePress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapePress);
  }

  onEscapePress = e => {
    return e.code !== 'Escape' ? null : this.props.onModalClose();
  };

  onBackdropClick = e => {
    return e.target !== e.currentTarget ? null : this.props.onModalClose();
  };

  render() {
    return createPortal(
      <div className={s.lightbox}>
        <ReactSprite />
        <div
          className={s.lightbox__overlay}
          onClick={this.onBackdropClick}
        ></div>
        <div className={s.lightbox__content}>
          <img
            className={s.lightbox__image}
            src={this.props.src}
            alt={this.props.alt}
          />
          <div className={s.lightbox__info}>
            <button
              type="button"
              className={s.lightbox__buttonClose}
              onClick={this.props.onModalClose}
              aria-label="close Modal Window"
            >
              <svg className={s.icon} width="32" height="32">
                <use href="#icon-close"></use>
              </svg>
            </button>
            {/* <div class="more-info">
                <p class="info-item">
                  <span>{{ likes }}</span>
                  <span class="material-icons">favorite</span>
                </p>
                <p class="info-item">
                  <span>{{ views }}</span>
                  <span class="material-icons">visibility</span>
                </p>
                <p class="info-item">
                  <span>{{ comments }}</span>
                  <span class="material-icons">textsms</span>
                </p>
                <p class="info-item">
                  <span>{{ downloads }}</span>
                  <span class="material-icons">cloud_download</span>
                </p>
              </div> */}
          </div>
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export { Modal };
