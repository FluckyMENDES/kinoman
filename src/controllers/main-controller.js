import {render, remove} from '../utils/render';

import FilmList from '../views/film-list/film-list';
import ExtraFilmList from '../views/extra-film-list/extra-film-list';
import ShowMoreButton from '../views/show-more-button/show-more-button';
import MainContent from '../views/main-content/main-content';
import NoFilms from '../views/no-films/no-films';
import FilmCard from '../views/film-card/film-card';
import TotalFilmsCount from '../views/total-film-count/total-film-count';
import Profile from '../views/profile/profile';
import MainNavigation from '../views/main-navigation/main-navigation';
import Sorting from '../views/sorting/sorting';
import DetailsPopup from '../views/details-popup/details-popup';

import {CLASSES} from '../main';

const SHOWING_FILMS_COUNT_ON_START = 5;
const SHOWING_FILMS_COUNT_BY_BUTTON = 5;

export default class MainController {
  constructor(container) {
    this._container = container;
  }
  render(data) {
    const {films} = data;

    const siteHeaderElement = document.querySelector(CLASSES.header);
    render(siteHeaderElement, new Profile());

    render(this._container, new MainNavigation(data));
    render(this._container, new Sorting());

    // Логика рендеринга карточки фильма
    const renderFilmCard = (container, film) => {
      const filmCardComponent = new FilmCard(film);
      render(container, filmCardComponent);
    };

    // Логика рендеринка основного контента
    const renderMain = (mainContainer, films) => {
      const mainComponent = new MainContent();
      const filmListComponent = new FilmList();

      // Рендер Main
      render(mainContainer, mainComponent);
      // Рендер Списка фильмов
      render(mainComponent, filmListComponent);

      // Рендер сообщения, если фильмов нет
      if (films.length < 1) {
        render(mainComponent, new NoFilms());
        return;
      }

      const filmListElement = filmListComponent.getElement().querySelector(CLASSES.filmListContainer);

      // Рендер Карточек фильмов
      films.slice(0, Math.min(films.length, SHOWING_FILMS_COUNT_ON_START)).forEach((film) => {
        return renderFilmCard(filmListElement, film);
      });

      // Логика рендеринка кнопки "Show more"
      if (films.length > SHOWING_FILMS_COUNT_BY_BUTTON) {
        let renderedFilmCount = SHOWING_FILMS_COUNT_BY_BUTTON;
        const showMoreButtonComponent = new ShowMoreButton();

        // Рендеринг кнопки 'Show more'
        render(mainComponent.getElement().querySelector(CLASSES.filmsList), showMoreButtonComponent);

        showMoreButtonComponent.getElement().addEventListener('click', (e) => {
          e.preventDefault();
          films
            .slice(renderedFilmCount, renderedFilmCount + SHOWING_FILMS_COUNT_BY_BUTTON)
            .forEach((film) => renderFilmCard(filmListElement, film));

          renderedFilmCount += SHOWING_FILMS_COUNT_BY_BUTTON;

          if (renderedFilmCount >= films.length) {
            remove(showMoreButtonComponent);
          }
        });
      }

      // Логика рендера дополнительных списков фильмов
      const renderExtra = (container, title, films) => {
        const extraListElement = new ExtraFilmList(title, films).getElement();
        render(container.querySelector(CLASSES.films), extraListElement, films);

        let filmRenderCounter = 2;
        if (filmRenderCounter >= films.length) {
          filmRenderCounter = films.length;
        }

        const getTopFilms = (arr) => {
          const result = arr.slice().sort((a, b) => {
            return b.props.rating - a.props.rating;
          });
          return result;
        };

        const getPopularFilms = (arr) => {
          const result = arr.slice().sort((a, b) => {
            return b.comments.length - a.comments.length;
          });
          return result;
        };

        const topFilms = getTopFilms(films);
        const popularFilms = getPopularFilms(films);

        let arr = films;

        if (title === 'Top rated') {
          arr = topFilms;
        } else if (title === 'Most commented') {
          arr = popularFilms;
        }
        for (let i = 0; i < filmRenderCounter; i++) {
          renderFilmCard(extraListElement.querySelector('.films-list__container'), arr[i]);
        }
      };

      // Рендерим дополнительные списки
      renderExtra(this._container, 'Top rated', films);
      renderExtra(this._container, 'Most commented', films);
    };

    // Рендеринг Main
    renderMain(this._container, films);

    const siteFooterStatistictElement = document.querySelector(`.footer__statistics`);
    render(siteFooterStatistictElement, new TotalFilmsCount(data.films.length));

    /**
     * Логика открытия попапа подробной информации о фильме
     */

    let popup = document.querySelector(CLASSES.popup);

    const hadleEscKeydown = (e) => {
      if (e.code === 'Escape') {
        popup = document.querySelector(CLASSES.popup);
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

        render(this._container, new DetailsPopup(films[id]));
        document.addEventListener('keydown', hadleEscKeydown);
      } else if (evt.target.closest('.film-details__close-btn')) {
        popup = document.querySelector('.film-details');
        if (popup) {
          popup.remove();
          document.removeEventListener('keydown', hadleEscKeydown);
        }
      }
    });
  }
}
