import s from './Footer.module.css';
import { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className={s.footer}>
        <p>&#169; All rights reserved. Images source</p>
        {/* <a href="https://pixabay.com/"
          className="logo footer__logo"
          target="_blank"
          noopener
          noreferrer
        >
          <svg width="150" height="40">
            <use href=""></use>
          </svg>
        </a> */}
      </footer>
    );
  }
}

export { Footer };