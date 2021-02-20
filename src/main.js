import {render} from './components/utils/utils';

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

const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, Profile());

const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, MainNavigation(data));
render(siteMainElement, Sorting());
render(siteMainElement, MainContent(data));

const siteFooterStatistictElement = document.querySelector(`.footer__statistics`);
render(siteFooterStatistictElement, TotalFilmsCount(data.films.length));

const filmList = document.querySelector('.films-list__container');

/**
 * Popup
 */

let popup = document.querySelector('.film-details');

const hadleEscKeydown = (e) => {
  if (e.code === 'Escape') {
    popup = document.querySelector('.film-details');
    if (popup) {
      popup.remove();
    }
  }
};

document.addEventListener('click', (evt) => {
  if (
    evt.target.closest('.film-card__poster') ||
    evt.target.closest('.film-card__title') ||
    evt.target.closest('.film-card__comments')
  ) {
    const filmCard = evt.target.closest('.film-card');
    const id = filmCard.dataset.id;

    render(siteMainElement, DetailsPopup(films[id]));
    document.addEventListener('keydown', hadleEscKeydown);
  } else if (evt.target.closest('.film-details__close-btn')) {
    popup = document.querySelector('.film-details');
    if (popup) {
      popup.remove();
      document.removeEventListener('keydown', hadleEscKeydown);
    }
  }
});

/**
 * Show more
 */

const SHOWING_FILMS_COUNT_BY_BUTTON = 5;

let showingFilmsCount = SHOWING_FILMS_COUNT_ON_START;

const showMoreBtn = document.querySelector('.films-list__show-more');
showMoreBtn.addEventListener('click', () => {
  const prevFilmsCount = showingFilmsCount;
  showingFilmsCount += SHOWING_FILMS_COUNT_BY_BUTTON;

  films.slice(prevFilmsCount, showingFilmsCount).forEach((film) => render(filmList, FilmCard(film)));

  if (showingFilmsCount >= films.length) {
    showMoreBtn.remove();
  }
});
