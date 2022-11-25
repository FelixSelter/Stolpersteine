const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

const countdown = document.getElementById("countdown");
const date = new Date(countdown.getAttribute("data-date"));

const interval = setInterval(() => {
  const delta = date.getTime() - Date.now();

  if (delta <= 0) {
    clearInterval(interval);
    countdown.querySelector(".days").textContent = 0;
    countdown.querySelector(".hours").textContent = 0;
    countdown.querySelector(".minutes").textContent = 0;
    countdown.querySelector(".seconds").textContent = 0;
    return;
  }

  const days = Math.floor(delta / day);
  const hours = Math.floor((delta % day) / hour);
  const minutes = Math.floor((delta % hour) / minute);
  const seconds = Math.floor((delta % minute) / second);

  countdown.querySelector(".days").textContent = days;
  countdown.querySelector(".hours").textContent = hours;
  countdown.querySelector(".minutes").textContent = minutes;
  countdown.querySelector(".seconds").textContent = seconds;
}, second);
