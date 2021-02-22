import {render} from './utils/utils';

import Profile from './components/profile/profile';
import MainNavigation from './components/main-navigation/main-navigation';
import Sorting from './components/sorting/sorting';
import TotalFilmsCount from './components/total-film-count/total-film-count';
import MainContent from './components/main-content/main-content';
import FilmList from './components/film-list/film-list';
import FilmCard from './components/film-card/film-card';
import ShowMoreButton from './components/show-more-button/show-more-button';
import DetailsPopup from './components/details-popup/details-popup';

import generateMockFilmsData from '../mock/films';

const SHOWING_FILMS_COUNT_ON_START = 5;
const SHOWING_FILMS_COUNT_BY_BUTTON = 5;

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

const CLASSSES = {
  header: '.header',
  main: '.main',
  filmListContainer: '.films-list__container',
};

const siteHeaderElement = document.querySelector(CLASSSES.header);
render(siteHeaderElement, new Profile().getElement());

const siteMainElement = document.querySelector(CLASSSES.main);
render(siteMainElement, new MainNavigation(data).getElement());
render(siteMainElement, new Sorting().getElement());

const renderFilmCard = (filmListElement, film) => {
  const filmCardComponent = new FilmCard(film);
  render(filmListElement, filmCardComponent.getElement());
};

const renderMain = (mainContainer, films) => {
  const mainComponent = new MainContent();
  const filmListComponent = new FilmList();

  // Рендер Main
  render(mainContainer, mainComponent.getElement());
  // Рендер Списка фильмов
  render(mainComponent.getElement(), filmListComponent.getElement());

  const filmListElement = filmListComponent.getElement().querySelector(CLASSSES.filmListContainer);

  // Рендер Карточек фильмов
  films.slice(0, Math.min(films.length, SHOWING_FILMS_COUNT_ON_START)).forEach((film) => {
    return renderFilmCard(filmListElement, film);
  });

  // Логика рендеринка кнопки "Show more"
  if (films.length > SHOWING_FILMS_COUNT_BY_BUTTON) {
    let renderedFilmCount = SHOWING_FILMS_COUNT_BY_BUTTON;
    const showMoreButtonComponent = new ShowMoreButton();

    // Рендеринг кнопки 'Show more'
    render(mainComponent.getElement(), showMoreButtonComponent.getElement());

    showMoreButtonComponent.getElement().addEventListener('click', (e) => {
      e.preventDefault();
      films
        .slice(renderedFilmCount, renderedFilmCount + SHOWING_FILMS_COUNT_BY_BUTTON)
        .forEach((film) => renderFilmCard(filmListElement, film));

      renderedFilmCount += SHOWING_FILMS_COUNT_BY_BUTTON;

      if (renderedFilmCount >= films.length) {
        showMoreButtonComponent.getElement().remove();
        showMoreButtonComponent.removeElement();
      }
    });
  }
};

// Рендеринг Main
renderMain(siteMainElement, films);

const siteFooterStatistictElement = document.querySelector(`.footer__statistics`);
render(siteFooterStatistictElement, new TotalFilmsCount(data.films.length).getElement());

// /**
//  * Popup
//  */

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

    render(siteMainElement, new DetailsPopup(films[id]).getElement());
    document.addEventListener('keydown', hadleEscKeydown);
  } else if (evt.target.closest('.film-details__close-btn')) {
    popup = document.querySelector('.film-details');
    if (popup) {
      popup.remove();
      document.removeEventListener('keydown', hadleEscKeydown);
    }
  }
});
