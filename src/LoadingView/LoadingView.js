import 'LoadingView/LoadingView.css';
import 'Gallery/Gallery.css';

import { Component } from 'react';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

class LoadingViev extends Component {
  render() {
    return (
      <ul className="gallery">
        {array.map(el => {
          return (
            <li key={el} className="loadingItem">
              <span className="dot"></span>
            </li>
          );
        })}
      </ul>
    );
  }
}

export { LoadingViev };
