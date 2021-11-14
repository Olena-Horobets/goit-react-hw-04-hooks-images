import './Gallery.css';

import { Component } from 'react';
import PropTypes from 'prop-types';
import { GalleryItem } from 'GalleryItem/GalleryItem';

class Gallery extends Component {
  render() {
    return (
      <ul className="gallery">
        {this.props.images.map(el => {
          return (
            <GalleryItem
              key={el.id}
              image={el}
              onCardClick={this.props.onCardClick}
            />
          );
        })}
      </ul>
    );
  }
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
