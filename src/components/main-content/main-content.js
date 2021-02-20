import FilmList from './../film-list/film-list';
import ExtraFimlList from './../extra-film-list/extra-film-list';

const MainContent = ({films, SHOWING_FILMS_COUNT_ON_START}) => {
  const createfilmListsTemplate = (films) => {
    if (films.length < 1) {
      return '«There are no movies in our database»';
    }
    return `
      ${FilmList(films, SHOWING_FILMS_COUNT_ON_START)}
      ${ExtraFimlList(`Top rated`, films)}
      ${ExtraFimlList(`Most commented`, films)}
    `;
  };

  return `
    <section class="films">
        ${createfilmListsTemplate(films)}
    </section>
    `;
};

export default MainContent;
