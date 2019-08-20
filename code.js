const startTime = new Date('2019-07-20 17:00:00').getTime();
const spanDays = document.querySelector('span.d');
const spanHour = document.querySelector('span.h');
const spanMin = document.querySelector('span.m');
const spanSec = document.querySelector('span.s');

const howMuch = () => {
  const nowTime = new Date().getTime();
  const time = nowTime - startTime;
  const days = Math.floor((nowTime / (1000 * 60 * 60 * 24)) - (startTime / (1000 * 60 * 60 * 24))) < 10 ? '0' + Math.floor((nowTime / (1000 * 60 * 60 * 24)) - (startTime / (1000 * 60 * 60 * 24))) : Math.floor((nowTime / (1000 * 60 * 60 * 24)) - (startTime / (1000 * 60 * 60 * 24)));
  const hours = Math.floor(((nowTime / (1000 * 60 * 60)) - (startTime / (1000 * 60 * 60))) % 24) < 10 ? '0' + Math.floor(((nowTime / (1000 * 60 * 60)) - (startTime / (1000 * 60 * 60))) % 24) : Math.floor(((nowTime / (1000 * 60 * 60)) - (startTime / (1000 * 60 * 60))) % 24);
  const minutes = Math.floor((nowTime / (1000 * 60) - (startTime / (1000 * 60))) % 60) < 10 ? '0' + Math.floor((nowTime / (1000 * 60) - (startTime / (1000 * 60))) % 60) : Math.floor((nowTime / (1000 * 60) - (startTime / (1000 * 60))) % 60);
  const seconds = Math.floor((nowTime / (1000) - (startTime / (1000))) % 60) < 10 ? '0' +
    Math.floor((nowTime / (1000) - (startTime / (1000))) % 60) : Math.floor((nowTime / (1000) - (startTime / (1000))) % 60);
  spanDays.textContent = days;
  spanDays.style.color = "red";
  spanHour.textContent = hours;
  spanHour.style.color = "green";
  spanMin.textContent = minutes;
  spanMin.style.color = "purple";
  spanSec.textContent = seconds;
  spanSec.style.color = "brown";
}

setInterval(howMuch, 1000)