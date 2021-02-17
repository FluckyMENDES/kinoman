import { render } from "./components/utils/utils";

import Profile from "./components/profile/profile";
import MainNavigation from "./components/main-navigation/main-navigation";
import Sorting from "./components/sorting/sorting";
import TotalFilmsCount from "./components/total-film-count/total-film-count";
import MainContent from "./components/main-content/main-content";

const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, Profile());

const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, MainNavigation());
render(siteMainElement, Sorting());
render(siteMainElement, MainContent());

const siteFooterStatistictElement = document.querySelector(
  `.footer__statistics`
);
render(siteFooterStatistictElement, TotalFilmsCount());
