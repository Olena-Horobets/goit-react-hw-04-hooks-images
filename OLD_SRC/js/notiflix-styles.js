import { Notify, Loading } from 'notiflix';

Notify.init({
  width: 'auto',
  position: 'right-top',
  distance: '100px',
  opacity: 1,
  borderRadius: '8px',
  timeout: 3000,
  showOnlyTheLastOne: true,

  fontFamily: 'inherit',
  fontSize: '16px',

  cssAnimationDuration: 250,
  cssAnimationStyle: 'from-top',
  useIcon: true,
  useFontAwesome: true,
  fontAwesomeIconSize: '14px',

  success: {
    background: '#3699C3',
    textColor: '#FFFFFF',
    fontAwesomeClassName: 'fas fa-like icon',
  },

  failure: {
    background: '#DF2E2E',
    textColor: '#FFFFFF',
    fontAwesomeClassName: 'fas fa-poop icon',
  },

  warning: {
    background: '#FF8A00',
    textColor: '#FFFFFF',
    fontAwesomeClassName: 'fas fa-bell icon',
  },

  info: {
    background: '#AC227D',
    textColor: '#FFFFFF',
    fontAwesomeClassName: 'fas fa-bell icon',
  },
});

Loading.init({
  backgroundColor: 'transparent',
  svgSize: '60px',
  svgColor: '#2b777e',
});
