let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  // console.log("Game was draw.");
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    // console.log("You Win!");
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    createSparkles();
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    // console.log("You Loose!");
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice=", userChoice);
  // generate comp choice -> modular
  const compChoice = genCompChoice();

  // console.log("comp choice =", compChoice);

  if (userChoice === compChoice) {
    //draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked",choiceId);
    playGame(userChoice);
  });
});

const createSparkles = () => {
  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    document.body.appendChild(sparkle);
    sparkle.style.left = `${Math.random() * window.innerWidth}px`;
    sparkle.style.top = `${Math.random() * window.innerHeight}px`;
    setTimeout(() => {
      sparkle.remove();
    }, 1000);
  }
};
