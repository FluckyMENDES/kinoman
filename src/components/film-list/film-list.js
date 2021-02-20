import FilmCard from "./../film-card/film-card";
import ShowMoreBtn from "./../show-more-button/show-more-button";

export default function FilmList(films, SHOWING_FILMS_COUNT_ON_START) {
  let filmRenderCounter = SHOWING_FILMS_COUNT_ON_START;
  if (SHOWING_FILMS_COUNT_ON_START >= films.length) {
    filmRenderCounter = films.length;
  }

  let result = ``;
  const createfilmCardsTemplate = (films) => {
    for (let i = 0; i < filmRenderCounter; i++) {
      result += FilmCard(films[i]);
    }
    return result;
  };

  return `
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

      <div class="films-list__container">
          ${createfilmCardsTemplate(films)}
      </div>

      ${ShowMoreBtn()}
    </section>
    `;
}
