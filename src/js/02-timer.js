import flatpickr from 'flatpickr'; // Імпорт Flatpickr бібліотеки
import 'flatpickr/dist/flatpickr.min.css'; // Імпорт стилів Flatpickr
import { Notify } from 'notiflix/build/notiflix-notify-aio'; // Імпорт модулю Notify з Notiflix

// Вибір DOM елементів за допомогою їх атрибутів data-*:
const startBtn = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');
let timerId = null; // Ініціалізація ідентифікатора таймера

startBtn.setAttribute('disabled', true); // Вимкнення кнопки "Start" при завантаженні сторінки
startBtn.classList.add('button-disabled');

// Функція для перетворення мілісекунд у д, г, х та с
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// Функція для додавання ведучого нуля до однозначних чисел
const addLeadingZero = value => String(value).padStart(2, 0);

// Налаштування Flatpickr
const options = {
  enableTime: true, // Включення можливості вибору часу
  time_24hr: true, // Використання 24-годинного формату часу
  defaultDate: new Date(), // Значення за замовчуванням - поточна дата і час
  minuteIncrement: 1, // Інкремент хвилин для вибору
  onClose(selectedDates) { // Функція, яка викликається при закритті вибору дати
    if (selectedDates[0] < new Date()) { // Перевірка, чи вибрана дата в майбутньому
      Notify.failure('Please choose a date in the future'); // Відображення повідомлення про помилку
      return;
    }
    startBtn.removeAttribute('disabled'); // Увімкнення кнопки "Start"
    startBtn.classList.remove('button-disabled');

    const showTimer = () => { // Функція для оновлення таймера
      const now = new Date();
      localStorage.setItem('CountDown-timer', selectedDates[0]);
      const selectData = new Date(localStorage.getItem('CountDown-timer'));

      if (!selectData) return;

      const diff = selectData - now;
      const { days, hours, minutes, seconds } = convertMs(diff);
      daysRef.textContent = days;
      hoursRef.textContent = addLeadingZero(hours);
      minutesRef.textContent = addLeadingZero(minutes);
      secondsRef.textContent = addLeadingZero(seconds);

      if (
        daysRef.textContent === '0' &&
        hoursRef.textContent === '00' &&
        minutesRef.textContent === '00' &&
        secondsRef.textContent === '00'
      ) {
        clearInterval(timerId); // Зупинка таймера, якщо досягнутий часовий ліміт
        Notify.success('Timer Ok!!!');
      }
    };

    const onClick = () => { // Обробник кліку кнопки "Start"
      if (timerId) {
        clearInterval(timerId); // Зупинка попереднього таймера, якщо він існує
      }
      startBtn.setAttribute('disabled', true); // Вимкнення кнопки "Start" при завантаженні сторінки
      startBtn.classList.add('button-disabled');
      showTimer(); // Початок та оновлення таймера
      timerId = setInterval(showTimer, 1000);
    };

    startBtn.addEventListener('click', onClick); // Додавання обробника кліку до кнопки "Start"
  },
};

flatpickr('#datetime-picker', { ...options }); // Ініціалізація Flatpickr на вказаному елементі
