import FilmCard from "./../film-card/film-card";

const ExtraFimlList = (title) => {
  return `
        <section class="films-list--extra">
            <h2 class="films-list__title">${title}</h2>

            <div class="films-list__container">
            ${FilmCard()}
            ${FilmCard()}
            </div>
        </section>

    `;
};

export default ExtraFimlList;
