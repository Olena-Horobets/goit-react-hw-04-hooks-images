import './ImageGallery.css';

import { Component } from 'react';
import { ImageGalleryItem } from 'ImageGalleryItem/ImageGalleryItem';
import photoFinder from '../API';

class ImageGallery extends Component {
  state = {
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps.searchValue', prevProps.searchValue);
    console.log('this.props.searchValue', this.props.searchValue);
    if (prevProps.searchValue !== this.props.searchValue) {
      fetch(photoFinder.getFetchUrl(this.props.searchValue))
        .then(res => res.json())
        .then(data => {
          this.setState(({ images }) => {
            console.log(data.hits);
            return { images: [...images, ...data.hits] };
          });
        });
    }
  }

  render() {
    console.log(this.state.images);
    return (
      <ul>
        {this.state.images.map(el => {
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
    );
  }
}

export { ImageGallery };
