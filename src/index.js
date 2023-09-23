// Імпорт необхідних модулів та стилів
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js'; // Імпорт функцій для отримання інформації про котів з власного API
import { Loading } from 'notiflix/build/notiflix-loading-aio'; // Імпорт модуля Loading з бібліотеки Notiflix для відображення завантаження
import { Notify } from 'notiflix/build/notiflix-notify-aio'; // Імпорт модуля Notify з бібліотеки Notiflix для відображення повідомлень

// Створення посилань на HTML-елементи за їх класами
const refs = {
  select: document.querySelector('.breed-select'), // Вибір породи кота
  loader: document.querySelector('.loader'), // Елемент завантаження
  err: document.querySelector('.error'), // Елемент для відображення повідомлення про помилку
  catCard: document.querySelector('.cat-info'), // Карта кота з інформацією
};

// Початкове приховання елементів на сторінці
refs.loader.style.display = 'none';
refs.err.style.display = 'none';
refs.select.style.display = 'none';
refs.catCard.style.display = 'none';

// Відображення анімованих крапок завантаження за допомогою Notiflix
Loading.dots({
  svgColor: 'black',
  svgSize: '80px',
  messageFontSize: '80px',
});

// Запит на отримання списку порід котів та обробка результату
fetchBreeds()
  .then(data => {
    // Показати вибір породи та приховати елементи завантаження
    refs.select.style.display = 'flex';
    refs.loader.style.display = 'none';

    // Створення опцій для вибору породи
    createMarkupOptions(data);

    // Ініціалізація плагіну SlimSelect для стильного вибору
    new SlimSelect({
      select: refs.select,
    });
  })
  .catch(err => {
    // Відображення повідомлення про помилку за допомогою Notiflix
    Notify.failure(refs.err.textContent);
  })
  .finally(result => Loading.remove());

// Функція для створення опцій вибору породи
function createMarkupOptions(arr) {
  return arr
    .map(({ id, name }) => {
      console.log({ id, name });

      const option = `<option value=${id}>${name}</option>`;
      refs.select.insertAdjacentHTML('beforeend', option);
    })
    .join('');
}

// Обробка події вибору породи кота
refs.select.addEventListener('change', e => {
  const id = e.target.value;

  // Відображення анімованих крапок завантаження за допомогою Notiflix
  Loading.dots({
    svgColor: 'black',
    svgSize: '80px',
    messageFontSize: '80px',
  });

  // Запит на отримання інформації про кота за обраною породою
  fetchCatByBreed(id)
    .then(catInfo => {
      // Показати карту кота та відобразити інформацію
      refs.catCard.style.display = 'flex';
      createMarkupCards(catInfo);
    })
    .catch(err => {
      // Відображення повідомлення про помилку за допомогою Notiflix
      Notify.failure(refs.err.textContent);
    })
    .finally(result => Loading.remove());
});

// Функція для створення інформаційної карти про кота
function createMarkupCards(data) {
  const {
    breeds: { name, description, temperament },
    url,
  } = data;

  const card = ` 
      <img class="cat-img" src="${url}" alt="${name}"  >
       <div class="cat-right">
      <h1 class="name">${name}</h1>
      <p class="description">${description}</p>
      <p class="temperament"><span class="temperament-span">Темперамент:</span> ${temperament}</p>    
      </div>`;

  refs.catCard.innerHTML = card;
}

// const card = `
  //     <img class="cat-img" src="${data.url}" alt="${data.breeds[0].name}"  >
  //      <div class="cat-right">
  //     <h1 class="name">${data.breeds[0].name}</h1>
  //     <p class="description">${data.breeds[0].description}</p>
  //     <p class="temperament"><span class="temperament-span">Temperament:</span> ${data.breeds[0].temperament}</p>
  //     </div>`;
