import './Modal.css';

import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscapePress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapePress);
  }

  onEscapePress = e => {
    if (e.code !== 'Escape') {
      return;
    } else {
      this.props.onModalClose();
    }
  };

  onBackdropClick = e => {
    return e.target === e.currentTarget ? this.props.onModalClose() : null;
  };

  render() {
    return createPortal(
      <div className="lightbox js-lightbox">
        <div className="lightbox__overlay" onClick={this.onBackdropClick}></div>
        <div className="lightbox__content">
          <img
            className="lightbox__image"
            src={this.props.src}
            alt={this.props.alt}
          />
          <div className="lightbox__info">
            <button
              type="button"
              // className="lightbox__button lightbox__button--close"
              onClick={this.props.onModalClose}
            >
              CLOSE
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

export { Modal };
