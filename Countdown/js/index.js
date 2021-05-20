const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function countdown() {
  const currentData = new Date();
  let year = currentData.getFullYear() + 1;
  const newYearsDate = new Date(year.toString());

  const totalSeconds = (newYearsDate - currentData) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = formatText(days);
  hoursEl.innerHTML = formatText(hours);
  minutesEl.innerHTML = formatText(minutes);
  secondsEl.innerHTML = formatText(seconds);
}

function formatText(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
