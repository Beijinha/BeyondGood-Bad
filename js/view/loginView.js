function render(login) {

    const container = document.querySelector('#container');
    container.innerHTML = ''; //removes the previous elements

    const div = document.createElement('div');
    div.className = `text-center`;

    const item = document.createElement('div');
    item.innerHTML = `<img src="pic_trulli.jpg" alt="Italian Trulli">
    </div>
    </div>`;

    div.appendChild(item);

    container.appendChild(div);
};

export default { render };