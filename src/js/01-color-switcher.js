function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let intervalId = false;
stopButton.disabled = true;

startButton.addEventListener('click', () => {
  if (!intervalId) {
    startButton.disabled = true;
    stopButton.disabled = false;
    intervalId = setInterval(() => {
      const randomColor = getRandomHexColor();
      document.body.style.backgroundColor = randomColor;
      // Оновлюємо поточний колір фону у локальному сховищі
      localStorage.setItem('color-switcher', randomColor);
    }, 1000);
  }
});

stopButton.addEventListener('click', () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    startButton.disabled = false;
    stopButton.disabled = true;
  }
});

// Перевіряємо і встановлюємо поточний колір
window.addEventListener('load', () => {
  const savedColor = localStorage.getItem('color-switcher');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
  }
});
