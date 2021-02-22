import FilmCard from './../film-card/film-card';
import {createElement} from './../../utils/utils';

export default class ExtraFimlList {
  constructor(title, films) {
    this._title = title;
    this._films = films;
    this._element = null;
  }

  getTemplate() {
    return this.createTemplate(this._title, this._films);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  createTemplate(title, films) {
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

    const createExtraFilmsTemplate = (length) => {
      let arr = films;
      if (title === 'Top rated') {
        arr = topFilms;
      } else if (title === 'Most commented') {
        arr = popularFilms;
      }
      let result = ``;
      for (let i = 0; i < length; i++) {
        result += new FilmCard(arr[i]).getTemplate();
      }
      return result;
    };

    return `
      <section class="films-list--extra">
          <h2 class="films-list__title">${title}</h2>

          <div class="films-list__container">
            ${createExtraFilmsTemplate(filmRenderCounter)}
          </div>
      </section>
    `;
  }
}
