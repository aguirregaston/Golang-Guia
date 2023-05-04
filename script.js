const buttons = document.querySelectorAll('.nav-button');
const firstButton = buttons[0];
const firstBox = firstButton.querySelector('.nav-square-link');
const activeClass = 'active';
const blueColor = '#1484FF';

function setActive(button) {
  const box = button.querySelector('.nav-square-link');
  button.classList.add(activeClass);
  box.style.backgroundColor = blueColor;
}

function removeActive(button) {
  const box = button.querySelector('.nav-square-link');
  button.classList.remove(activeClass);
  box.style.backgroundColor = '';
}

setActive(firstButton);

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    buttons.forEach(removeActive);
    setActive(button);
  });
});
