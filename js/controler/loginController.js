import loginView from '/js/view/loginView.js';
import loginService from '/js/service/loginService.js';

async function init() {
  const login = await loginService.getCustomers();
  loginView.render(login);
};

export default { init };