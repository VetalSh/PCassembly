const daysBlock = document.querySelector(".timer__days");
const hoursBlock = document.querySelector(".timer__hours");
const minutesBlock = document.querySelector(".timer__minutes");
const secondsBlock = document.querySelector(".timer__seconds");

let interval;

const numWord = (value, words) => {
  value = Math.abs(value) % 100;
  const lastNum = value % 10;

  if (value > 10 && value < 20) return words[2];
  if (lastNum > 1 && lastNum < 5) return words[1];
  if (lastNum === 1) return words[0];

  return words[2];
};

const updateTimer = () => {
  const date = new Date();
  const dateDeadline = new Date("27 april 2022").getTime();
  const timeRemaining = (dateDeadline - date) / 1000;

  const days = Math.floor(timeRemaining / 60 / 60 / 24);
  const hours = Math.floor((timeRemaining / 60 / 60) % 24);
  const minutes = Math.floor((timeRemaining / 60) % 60);
  const seconds = Math.floor(timeRemaining % 60);

  const fdays = days < 10 ? "0" + days : days;
  const fhours = hours < 10 ? "0" + hours : hours;
  const fminutes = minutes < 10 ? "0" + minutes : minutes;
  const fseconds = seconds < 10 ? "0" + seconds : seconds;

  daysBlock.textContent = fdays;
  hoursBlock.textContent = fhours;
  minutesBlock.textContent = fminutes;
  secondsBlock.textContent = fseconds;

  daysBlock.nextElementSibling.textContent = numWord(days, [
    "день",
    "дня",
    "дней",
  ]);
  hoursBlock.nextElementSibling.textContent = numWord(hours, [
    "час",
    "часа",
    "часов",
  ]);
  minutesBlock.nextElementSibling.textContent = numWord(minutes, [
    "минута",
    "минуты",
    "минут",
  ]);
  secondsBlock.nextElementSibling.textContent = numWord(seconds, [
    "секунда",
    "секунды",
    "секунд",
  ]);

  if (timeRemaining <= 0) {
    clearInterval(interval);
    daysBlock.textContent = "00";
    hoursBlock.textContent = "00";
    minutesBlock.textContent = "00";
    secondsBlock.textContent = "00";
  }
};

updateTimer();
interval = setInterval(updateTimer, 500);
