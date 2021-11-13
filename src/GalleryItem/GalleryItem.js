import './GalleryItem.css';
import { Component } from 'react';

class GalleryItem extends Component {
  render() {
    return (
      <li
        className="gallery-card"
        id={this.props.id}
        onClick={this.props.onCardClick}
        datasrc={this.props.datasrc}
      >
        <img
          className="gallery-card__img"
          src={this.props.url}
          alt={this.props.tags}
          loading="lazy"
        />

        {/* <div class="info">
          <div class="info__thumb">
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

        {/* <div
            class="blur"
            style="background-image: url({webformatURL})"
          ></div> */}
        {/* </div> */}
      </li>
    );
  }
}

export { GalleryItem };
