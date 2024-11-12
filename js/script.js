const accordionItems = document.querySelectorAll('.accordion-item');
const navItems = document.querySelectorAll('header a');

for (const item of accordionItems) {
    item.addEventListener('click', () => item.classList.toggle('active'));
}

for (const item of navItems) {
    item.addEventListener('click', () => {
        document.querySelector(`.${item.dataset.scrollto}`)?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'start' });
    });
}

const targetDate = new Date("November 23, 2024").getTime();

const countdown = document.querySelector('.countdown-timer');
let x;
const updateCountdown = () => {
  const todaysDate = Date.now();

  const distance = targetDate - todaysDate;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(x);
    countdown.innerText = "";
  }
};

updateCountdown();
x = setInterval(updateCountdown, 1000);