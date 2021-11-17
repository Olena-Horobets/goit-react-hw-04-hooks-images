import s from './Modal.module.css';

import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { ReactComponent as ReactSprite } from 'images/svg/sprite.svg';

const modalRoot = document.querySelector('#modal-root');

function Modal({ src, alt, onModalClose }) {
  const onEscapePress = e => {
    return e.code !== 'Escape' ? null : onModalClose();
  };

  const onBackdropClick = e => {
    return e.target !== e.currentTarget ? null : onModalClose();
  };

  useEffect(() => {
    window.addEventListener('keydown', onEscapePress);
    return window.removeEventListener('keydown', onEscapePress);
  });

  return createPortal(
    <div className={s.lightbox}>
      <ReactSprite />
      <div className={s.lightbox__overlay} onClick={onBackdropClick}></div>
      <div className={s.lightbox__content}>
        <img className={s.lightbox__image} src={src} alt={alt} />
        <div className={s.lightbox__info}>
          <button
            type="button"
            className={s.lightbox__buttonClose}
            onClick={onModalClose}
            aria-label="close Modal Window"
          >
            <svg className={s.icon} width="32" height="32">
              <use href="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export { Modal };
