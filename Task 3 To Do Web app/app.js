let form = document.querySelector("#div1 form");
let main = document.querySelector('#main');
let clear = document.querySelector('#clear');

form.addEventListener("submit", (event) => {
  let task1 = event.target.elements.task1.value;
  let timestamp = new Date().toLocaleString();
  let tasks = JSON.parse(localStorage.getItem('taskList')) ?? [];
  tasks.push({ 'task1': task1, 'timestamp': timestamp });
  localStorage.setItem('taskList', JSON.stringify(tasks));
  event.target.reset();
  display();
  event.preventDefault();
});

clear.addEventListener('click', () => {
  localStorage.removeItem('taskList');
  display();
});

let display = () => {
  let tasks = JSON.parse(localStorage.getItem('taskList')) ?? [];
  let cardsContainer = document.querySelector('#main .col-md-8');
  cardsContainer.innerHTML = ''; // Clear previous cards

  tasks.forEach((task, i) => {
    let card = document.createElement('div');
    card.classList.add('card', 'mb-3');

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let inputGroup = document.createElement('div');
    inputGroup.classList.add('input-group', 'mb-3');

    let input = document.createElement('input');
    input.type = 'text';
    input.classList.add('form-control');
    input.value = `${task.task1} - ${task.timestamp}`;
    input.setAttribute('aria-label', 'Add a new task');
    input.setAttribute('aria-describedby', 'button-addon2');
    input.disabled = true;

    let button = document.createElement('button');
    button.classList.add('btn', 'btn-danger');
    button.type = 'button';
    button.id = 'button2';
    button.textContent = 'Remove';
    button.onclick = () => removeData(i);

    inputGroup.appendChild(input);
    inputGroup.appendChild(button);
    cardBody.appendChild(inputGroup);
    card.appendChild(cardBody);
    cardsContainer.appendChild(card);
  });
};

let removeData = (index) => {
  let tasks = JSON.parse(localStorage.getItem('taskList')) ?? [];
  tasks.splice(index, 1);
  localStorage.setItem('taskList', JSON.stringify(tasks));
  display();
}

window.onload = () => {
  display();
};