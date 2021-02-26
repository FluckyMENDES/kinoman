import {getYearFromDate, getTimeFromDuration, trimString} from '../../utils/common';
import Abstract from '../abstract/abstract';

export default class FilmCard extends Abstract {
  constructor(film) {
    super();
    this._film = film;
    this._callback;

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this._callback.click();
  }

  setClickHandler(cb) {
    this._callback.click = cb;
    this.getElement().addEventListener('click', this._handleClick);
  }

  createTemplate(film = this._film) {
    const {id, comments, props, userProps} = film;
    const {title, desc, rating, releaseDate, genres, posterUrl, durationMinutes} = props;
    const {isWatched, isFavorite, willWatch} = userProps;

    const year = getYearFromDate(releaseDate);
    const duration = getTimeFromDuration(durationMinutes);
    const description = trimString(desc);
    const commentsCount = comments.length;

    return `
      <article class="film-card" data-id="${id}">
        <div class="film-card__header">
          <h3 class="film-card__title">${title}</h3>
          <p class="film-card__rating">${rating}</p>
        </div>
        <p class="film-card__info">
            <span class="film-card__year">${year}</span>
            <span class="film-card__duration">${duration}</span>
            <span class="film-card__genre">${genres[0]}</span>
        </p>
        <img src="./images/posters/${posterUrl}" alt="" class="film-card__poster">
        <p class="film-card__description">${description}</p>
        <a class="film-card__comments">${commentsCount} comments</a>
        <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${
              willWatch ? 'film-card__controls-item--active' : ''
            }">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched  ${
              isWatched ? 'film-card__controls-item--active' : ''
            }">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite ${
              isFavorite ? 'film-card__controls-item--active' : ''
            }">Mark as favorite</button>
        </form>
      </article>
    `;
  }
}
