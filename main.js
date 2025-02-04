const options = ["rock", "paper", "scissors"];
const userChoiceContainer = document.getElementById("user-choice");
const computerChoiceContainer = document.getElementById("computer-choice");
const resultContainer = document.getElementById("result");

function selectRock() {
  // userChoice = "rock"
  const userChioce = "rock";

  userChoiceContainer.innerText = "Your choice : Rock (🪨)";

  // computer choice --> generate

  const computersChoice = getComputersChoice();

  computerChoiceContainer.innerHTML = "Computers choice : " + computersChoice;

  // check who won
  checkWhoWon(userChioce, computersChoice);
}

function selectPaper() {
  userChoiceContainer.innerText = "Your choice : Paper (📄)";
  // userChoice = "rock"
  const userChioce = "paper";

  // computer choice --> generate

  const computersChoice = getComputersChoice();

  computerChoiceContainer.innerHTML = "Computers choice : " + computersChoice;

  // check who won
  checkWhoWon(userChioce, computersChoice);
}

function selectScissors() {
  // userChioce = "scissors"
  userChoiceContainer.innerText = "Your choice : Scissors (✂️)";
  // userChoice = "rock"
  const userChioce = "scissors";

  // computer choice --> generate

  const computersChoice = getComputersChoice();

  computerChoiceContainer.innerHTML = "Computers choice : " + computersChoice;

  // check who won
  checkWhoWon(userChioce, computersChoice);
}

function getComputersChoice() {
  let randomIndex = Math.floor(Math.random() * options.length); // 0 , 1, 2
  return options[randomIndex];
}

function checkWhoWon(usersChioce, computersChoice) {
  if (
    (usersChioce === "rock" && computersChoice === "scissors") ||
    (usersChioce === "paper" && computersChoice === "rock") ||
    (usersChioce === "scissors" && computersChoice === "paper")
  ) {
    resultContainer.innerHTML = "Result: Cong. You won!!";
  } else if (
    (computersChoice === "rock" && usersChioce === "scissors") ||
    (computersChoice === "paper" && usersChioce === "rock") ||
    (computersChoice === "scissors" && usersChioce === "paper")
  ) {
    resultContainer.innerHTML = "Result : You Lost..";
  } else {
    resultContainer.innerHTML = "Result : Draw";
  }
}