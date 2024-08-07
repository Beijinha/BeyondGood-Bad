function render() {

  const container = document.querySelector('#container');
  container.innerHTML = ''; //removes the previous elements

  window.location.href = "html/login.html";
};

export default { render };
