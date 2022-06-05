const container = document.querySelector('.container');
const rating = document.querySelectorAll('.container__rating--item');
const form = document.querySelector('.container__form');
const submitButton = document.querySelector('.container__button--submit');
const thanks = document.querySelector('.thanks');
const result = document.getElementById('result');

let ratingValue = 0;

rating.forEach(element => {
    element.addEventListener('click', () => rate(element))
    element.removeEventListener('click', () => rate(element))
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitForm();
});

function rate(e) {
  rating.forEach(item => {
    item.classList.remove('container__rating--active');
  })
  e.classList.add('container__rating--active');
  ratingValue = e.firstElementChild.value;
}

function submitForm() {
  container.style.display = 'none';
  thanks.style.display = 'flex';
  result.innerHTML = ratingValue;
}