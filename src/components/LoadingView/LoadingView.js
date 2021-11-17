import s from './LoadingView.module.css';
import galleryStyles from '../Gallery/Gallery.module.css';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function LoadingViev() {
  return (
    <ul className={galleryStyles.gallery}>
      {array.map(el => {
        return (
          <li key={el} className={s.loadingItem}>
            <div className={s.dotBox}>
              <span className={s.dot1}></span>
              <span className={s.dot2}></span>
              <span className={s.dot3}></span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export { LoadingViev };
