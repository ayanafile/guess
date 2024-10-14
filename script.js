let randomNum = Math.ceil(Math.random() * 20);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const val = Number(document.querySelector('.guess').value);

  if (!val) {
    displayMessage('😊 No number');
  } else if (val == randomNum) {
    displayMessage('😍Correct Number');
    document.querySelector('.number').textContent = randomNum;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (val != randomNum) {
    score--;
    document.querySelector('.score').textContent = score;
    displayMessage(val > randomNum ? '📈 To high' : '📉 TO low');
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  randomNum = Math.ceil(Math.random() * 20);

  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
