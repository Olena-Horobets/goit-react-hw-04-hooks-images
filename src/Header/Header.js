import s from './Header.module.css';
import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className={s.header}>
        <svg className="logo header__logo" width="60" height="60">
          <use href=""></use>
        </svg>

        <h1 className={s.header__title}>Perfect image finder</h1>
      </header>
    );
  }
}

export { Header };
