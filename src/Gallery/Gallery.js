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
              url={el.webformatURL}
              alt={el.tags}
              id={el.id}
              datasrc={el.largeImageURL}
              onCardClick={this.props.onCardClick}
            />
          );
        })}
      </ul>
    );
  }
}

export { Gallery };
