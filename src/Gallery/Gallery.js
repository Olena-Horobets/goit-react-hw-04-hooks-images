import './Gallery.css';

import { Component } from 'react';
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

export { Gallery };
