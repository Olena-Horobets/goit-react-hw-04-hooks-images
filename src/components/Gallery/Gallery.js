import s from './Gallery.module.css';

import PropTypes from 'prop-types';
import { GalleryItem } from '../GalleryItem/GalleryItem';

function Gallery({ images, onCardClick }) {
  return (
    <ul className={s.gallery}>
      {images.map(el => {
        return <GalleryItem key={el.id} image={el} onCardClick={onCardClick} />;
      })}
    </ul>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  onCardClick: PropTypes.func.isRequired,
};

export { Gallery };
