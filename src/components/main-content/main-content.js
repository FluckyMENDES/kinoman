import FilmCard from "./../film-card/film-card";
import ShowMoreBtn from "./../show-more-button/show-more-button";
import ExtraFimlList from "./../extra-film-list/extra-film-list";

const MainContent = () => {
  return `
    <section class="films">
        <section class="films-list">
        <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

        <div class="films-list__container">
            ${FilmCard()}
            ${FilmCard()}
            ${FilmCard()}
            ${FilmCard()}
            ${FilmCard()}
        </div>

        ${ShowMoreBtn()}
        </section>

        ${ExtraFimlList(`Top rated`)}
        ${ExtraFimlList(`Most commented`)}
    </section>
    `;
};

export default MainContent;
