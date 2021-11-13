import './ImageGallery.css';

import { Component } from 'react';
import { ImageGalleryItem } from 'ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    return (
      <>
        <ul className="gallery">
          {this.props.images.map(el => {
            return (
              <ImageGalleryItem
                key={el.id}
                url={el.webformatURL}
                alt={el.tags}
                id={el.id}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

export { ImageGallery };
