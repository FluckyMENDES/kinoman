import {renderPosition, renderTemplate, render, createElement} from './utils/utils';

import Profile from './components/profile/profile';
import MainNavigation from './components/main-navigation/main-navigation';
import Sorting from './components/sorting/sorting';
import TotalFilmsCount from './components/total-film-count/total-film-count';
import MainContent from './components/main-content/main-content';
import FilmCard from './components/film-card/film-card';
import DetailsPopup from './components/details-popup/details-popup';

import generateMockFilmsData from '../mock/films';

const SHOWING_FILMS_COUNT_ON_START = 5;

// Генерация моковых данных
const films = generateMockFilmsData(20);
// Создание массивов просмотренных и любимых фильмов
const favoriteFilms = films.slice().filter((film) => film.userProps.isFavorite === true);
const watchedFilms = films.slice().filter((film) => film.userProps.isWatched === true);
const willWatchFilms = films.slice().filter((film) => film.userProps.willWatch === true);

const data = {
  films,
  favoriteFilms,
  watchedFilms,
  willWatchFilms,
  SHOWING_FILMS_COUNT_ON_START,
};

// const renderFilmCard = () => {};

// const renderApp = () => {};

const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, new Profile().getElement());

const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, new MainNavigation(data).getElement());
render(siteMainElement, new Sorting().getElement());
render(siteMainElement, new MainContent(data).getElement());

const siteFooterStatistictElement = document.querySelector(`.footer__statistics`);
render(siteFooterStatistictElement, new TotalFilmsCount(data.films.length).getElement());

const filmList = document.querySelector('.film-list');
// /**
//  * Popup
//  */

// let popup = document.querySelector('.film-details');

// const hadleEscKeydown = (e) => {
//   if (e.code === 'Escape') {
//     popup = document.querySelector('.film-details');
//     if (popup) {
//       popup.remove();
//     }
//   }
// };

// document.addEventListener('click', (evt) => {
//   if (
//     evt.target.closest('.film-card__poster') ||
//     evt.target.closest('.film-card__title') ||
//     evt.target.closest('.film-card__comments')
//   ) {
//     const filmCard = evt.target.closest('.film-card');
//     const id = filmCard.dataset.id;

//     render(siteMainElement, new DetailsPopup(films[id]).getElement());
//     document.addEventListener('keydown', hadleEscKeydown);
//   } else if (evt.target.closest('.film-details__close-btn')) {
//     popup = document.querySelector('.film-details');
//     if (popup) {
//       popup.remove();
//       document.removeEventListener('keydown', hadleEscKeydown);
//     }
//   }
// });

// /**
//  * Show more
//  */

// const SHOWING_FILMS_COUNT_BY_BUTTON = 5;

// let showingFilmsCount = SHOWING_FILMS_COUNT_ON_START;

// const showMoreBtn = document.querySelector('.films-list__show-more');
// showMoreBtn.addEventListener('click', () => {
//   const prevFilmsCount = showingFilmsCount;
//   showingFilmsCount += SHOWING_FILMS_COUNT_BY_BUTTON;

//   films
//     .slice(prevFilmsCount, showingFilmsCount)
//     .forEach((film) => render(filmList, new FilmCard(film)).getElement());

//   if (showingFilmsCount >= films.length) {
//     showMoreBtn.remove();
//   }
// });
