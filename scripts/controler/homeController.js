import homeView from '/js/view/homeView.js';
import homeService from '/js/service/homeService.js';

async function init() {
  const home = await homeService.getFilms();
  homeView.render(home);
};

export default { init };
