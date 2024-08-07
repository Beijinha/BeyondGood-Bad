function render() {

  const container = document.querySelector('#container');
  container.innerHTML = ''; //removes the previous elements

  window.location.href = "login.html";
};

export default { render };
