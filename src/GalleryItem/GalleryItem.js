import s from './GalleryItem.module.css';

import { Component } from 'react';
import PropTypes from 'prop-types';

class GalleryItem extends Component {
  render() {
    const { image } = this.props;
    return (
      <li
        className={s.galleryCard}
        id={image.id}
        onClick={this.props.onCardClick}
        datasrc={image.largeImageURL}
        dataalt={image.tags}
      >
        <img
          className={s.galleryCard__img}
          src={image.webformatURL}
          alt={image.tags}
        />

        <div className={s.info}>
          <div className={s.info__thumb}>
            <p className={s.infoItem}>
              <span>{image.likes}</span>
              <span className={s.materialIcons}>favorite</span>
            </p>
            <p className={s.infoItem}>
              <span>{image.views}</span>
              <span className={s.materialIcons}>visibility</span>
            </p>
            <p className={s.infoItem}>
              <span>{image.comments}</span>
              <span className={s.materialIcons}>textsms</span>
            </p>
            <p className={s.infoItem}>
              <span>{image.downloads}</span>
              <span className={s.materialIcons}>cloud_download</span>
            </p>
          </div>

          <div
            className={s.blur}
            style={{ backgroundImage: `url(${image.webformatURL})` }}
          ></div>
        </div>
      </li>
    );
  }
}

GalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),

  onCardClick: PropTypes.func.isRequired,
};

export { GalleryItem };
