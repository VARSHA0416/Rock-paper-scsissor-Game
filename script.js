const choices = ["rock", "paper", "scissors"];
let userScore=0;
let computerScore=0;

const soundMap = {
  rock: new Audio("rock.wav"),
  paper: new Audio("paper.wav"),
  scissors: new Audio("scissor.wav"),
};
  console.log(soundMap.rock);
  console.log(soundMap.paper);
  console.log(soundMap.scissor);


function emoji(choice) {
  if (choice === "rock") return "👊";
  if (choice === "paper") return "📄";
  if (choice === "scissors") return "✂️";
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  let result = "";

  soundMap[userChoice].currentTime = 0; // restart sound if clicking fast
  soundMap[userChoice].play();


  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
    userScore++;
  } else {
    result = "You lose!";
    computerScore++;
  }
  document.getElementById("user-choice").innerText = `You chose: ${emoji(userChoice)} (${userChoice})`;
  document.getElementById("computer-choice").innerText = `Computer chose: ${emoji(computerChoice)} (${computerChoice})`;
  const winnerText = document.getElementById("winner");
winnerText.innerText = `Result: ${result}`;


winnerText.className = "";


if (result === "You win!") {
  winnerText.classList.add("result-win");
} else if (result === "You lose!") {
  winnerText.classList.add("result-lose");
} else {
  winnerText.classList.add("result-draw");
}

  document.getElementById("score").innerText = `Score - You: ${userScore} | Computer: ${computerScore}`;
}
 


function resetScore() {
  userScore = 0;
  computerScore = 0;
  document.getElementById("score").innerText = `Score - You: ${userScore} | Computer: ${computerScore}`;
  document.getElementById("winner").innerText = "Result: ";
  document.getElementById("user-choice").innerText = "You chose: ";
  document.getElementById("computer-choice").innerText = "Computer chose: ";
}
const bgMusic = document.getElementById("bg-music");
const musicBtn = document.getElementById("toggle-music");

function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.innerText = "🎵 Mute Music";
  } else {
    bgMusic.pause();
    musicBtn.innerText = "🔇 Play Music";
  }
}


