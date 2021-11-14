import s from './GalleryItem.module.css';

import { Component } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ReactSprite } from 'images/sprite.svg';

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
        <ReactSprite />
        <img
          className={s.galleryCard__img}
          src={image.webformatURL}
          alt={image.tags}
        />

        <div className={s.info}>
          <div className={s.info__thumb}>
            <p className={s.infoItem}>
              <span>{image.likes}</span>
              <svg className={s.icon} width="18" height="18">
                <use href="#icon-like"></use>
              </svg>
            </p>
            <p className={s.infoItem}>
              <span>{image.views}</span>
              <svg className={s.icon} width="18" height="18">
                <use href="#icon-view"></use>
              </svg>
            </p>
            <p className={s.infoItem}>
              <span>{image.comments}</span>
              <svg className={s.icon} width="18" height="18">
                <use href="#icon-comment"></use>
              </svg>
            </p>
            <p className={s.infoItem}>
              <span>{image.downloads}</span>
              <svg className={s.icon} width="18" height="18">
                <use href="#icon-download"></use>
              </svg>
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
