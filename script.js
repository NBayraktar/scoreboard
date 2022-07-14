const btn1 = document.querySelectorAll('button')[0];
const btn2 = document.querySelectorAll('button')[1];
const btn3 = document.querySelectorAll('button')[2];
const btn4 = document.querySelectorAll('button')[3];
const btn5 = document.querySelectorAll('button')[4];
const btn6 = document.querySelectorAll('button')[5];
const homeScore = document.querySelectorAll('.score')[0];
const guestScore = document.querySelectorAll('.score')[1];

let sumHome = 0;
let sumGuest = 0;

btn1.addEventListener('click', () => {
  sumHome++;
  showHomeScore();
});

btn2.addEventListener('click', () => {
  sumHome += 2;
  showHomeScore();
});

btn3.addEventListener('click', () => {
  sumHome += 3;
  showHomeScore();
});

btn4.addEventListener('click', () => {
  sumGuest++;
  showGuestScore();
});

btn5.addEventListener('click', () => {
  sumGuest += 2;
  showGuestScore();
});

btn6.addEventListener('click', () => {
  sumGuest += 3;
  showGuestScore();
});

function showHomeScore() {
  homeScore.textContent = sumHome;
}

function showGuestScore() {
  guestScore.textContent = sumGuest;
}