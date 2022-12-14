let checkBtn = document.querySelector(".check_btn");
let againButton = document.querySelector(".again_button");
let currentNumber = document.querySelector(".current_number");
let guessingNumber = document.querySelector(".guessing_number");
let currentScore = document.querySelector(".current_score");
let currentHighScore = document.querySelector(".current_high_score");
let score = 20;
let inputNumberBox = document.querySelector(".input_number_box");
let randomSetOfNumber = Math.trunc(Math.random() * 21);

console.log(randomSetOfNumber);
checkBtn.addEventListener("click", function () {
  let boxValue = Number(inputNumberBox.value);
  console.log(inputNumberBox.value > 20);
  if (
    !inputNumberBox.value ||
    inputNumberBox.value < 0 ||
    inputNumberBox.value > 21
  ) {
    guessingNumber.textContent = `Write Something Empty Input is not acceptable or Number Should be in between 1 to 20`;
  }
  correctAnswer(boxValue, randomSetOfNumber);
  wrongAnswer(boxValue, randomSetOfNumber);
  inputNumberBox.value = "";
});

function correctAnswer(boxValue, randomSetOfNumber) {
  if (
    boxValue === randomSetOfNumber &&
    inputNumberBox.value > 0 &&
    inputNumberBox.value < 21
  ) {
    guessingNumber.textContent = "Correct Answer......";
    document.body.style.backgroundColor = "rgb(0, 255, 47)";
    console.log(`For right answer ${currentHighScore.textContent}`);
    currentNumber.textContent = randomSetOfNumber;
  }
  if (boxValue === randomSetOfNumber && score > currentHighScore.textContent) {
    currentHighScore.textContent = score;
  }
}
function wrongAnswer(boxValue, randomSetOfNumber) {
  if (
    boxValue < randomSetOfNumber &&
    inputNumberBox.value > 0 &&
    inputNumberBox.value < 21
  ) {
    guessingNumber.textContent = "Too Low ......";
    currentScore.textContent = --score;
    document.body.style.backgroundColor = "rgb(219 56 9)";
  } else if (
    boxValue > randomSetOfNumber &&
    inputNumberBox.value > 0 &&
    inputNumberBox.value < 21
  ) {
    guessingNumber.textContent = "Too High ......";
    currentScore.textContent = --score;
    document.body.style.backgroundColor = "rgb(219 56 9)";
  }
}

againButton.addEventListener("click", function () {
  randomSetOfNumber = Math.trunc(Math.random() * 21);
  console.log(randomSetOfNumber);
  score = 20;
  document.body.style.backgroundColor = "rgb(170 143 208)";
  guessingNumber.textContent = "Start Guessing the Number.....";
  currentScore.textContent = score;
  currentNumber.textContent = `?`;
});

