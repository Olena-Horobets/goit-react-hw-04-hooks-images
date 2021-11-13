import './Modal.css';
import { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <div className="lightbox js-lightbox">
        <div className="lightbox__overlay"></div>
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
      </div>
    );
  }
}

export { Modal };
