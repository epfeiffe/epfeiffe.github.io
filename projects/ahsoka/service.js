const myWoof = document.querySelector('#woof');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const errorMsg = document.querySelector('.errorMsg');
const users = document.querySelector('#users');
const usersBox = document.querySelector('.usersBox');

myWoof.addEventListener('submit', onSubmit);

function onSubmit(s) {
  s.preventDefault(); // prevents items disappearing immediately

  if (name.value === '' || email.value === '') {
    errorMsg.classList.add('error');
    errorMsg.innerHTML = 'Please enter name AND email field';

    setTimeout(() => errorMsg.remove(), 2500); // remove error message after 2.5 seconds
  } else {
    usersBox.classList.add('dark');
    const li = document.createElement('li');
    const li2 = document.createElement('li');

    li.appendChild(document.createTextNode(`Woof Woof! Bark!`));
    li2.appendChild(
      document.createTextNode(
        `NAME:${name.value} EMAIL:${email.value} MESSAGE:${message.value}`
      )
    );
    users.appendChild(li);
    users.appendChild(li2);

    name.value = '';
    email.value = '';
  }
}
