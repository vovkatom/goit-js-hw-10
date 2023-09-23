// Імпорт модуля Axios для виконання HTTP-запитів
import axios from 'axios';

// URL і ключ доступу API
const URL = 'https://api.thecatapi.com/v1/';
const API_KEY =
  'live_Uczt18D595C6qQt0FV6BIE3pO0lPgMNJbt2vi6yynq9BhPO9UHt9Z5XcuGnVcxuF';

// Встановлення заголовка x-api-key для доступу до API
axios.defaults.headers.common['x-api-key'] = API_KEY;

// Функція для отримання списку порід котів
function fetchBreeds() {
  const BREEDS_URL = `${URL}breeds`;
  return axios.get(BREEDS_URL).then(res => {
    if (res.status !== 200) {
      throw new Error(res.status);
    }
    return res.data;
  });
}

// Функція для отримання інформації про кота за ID породи
function fetchCatByBreed(breedId) {
  const IMAGES_URL = `${URL}images/search`;
  
  // Створення параметрів запиту з ID породи
  const params = new URLSearchParams({
    breed_ids: breedId,
  });
  
  return axios.get(`${IMAGES_URL}?${params}`).then(res => {
    if (res.status !== 200) {
      throw new Error(res.status);
    }
    return res.data[0];
  });
}

// Експорт функцій для використання в інших частинах програми
export { fetchBreeds, fetchCatByBreed };
