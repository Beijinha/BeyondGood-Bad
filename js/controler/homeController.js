import homeView from '/js/view/homeView.js';
import HomeService from '/js/service/HomeService.js';

async function init() {
  const home = await HomeService.getFilms();
  homeView.render(home);
};

export default { init };
