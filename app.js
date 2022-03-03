const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    //starts the game//
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    // play match //
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      //options for comp//
      const computerOptions = ["rock", "paper", "scissors"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //computer choices//
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            //comparing hands//
            compareHands(this.textContent, computerChoice);
            //img update//
            playerHand.src = `./pics/${this.textContent}.png`;
            computerHand.src = `./pics/${computerChoice}.png`;
          }, 2000);
          //the animation//
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
  
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
  
    const compareHands = (playerChoice, computerChoice) => {
      //text update//
      const winner = document.querySelector(".winner");
      //checks for a tie//
      if (playerChoice === computerChoice) {
        winner.textContent = "It is a tie...👔";
        return;
      }
      //checks for rock//
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "You won! :)";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer Wins 😔";
          cScore++;
          updateScore();
          return;
        }
      }
      //checks for paper//
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer Wins 😐";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "You won👀 ";
          pScore++;
          updateScore();
          return;
        }
      }
      //checks for scissors//
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Computer Wins 🤡";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "You won 💅";
          pScore++;
          updateScore();
          return;
        }
      }
    };
  
    //calls the inner function//
    startGame();
    playMatch();
  };
  
  //start the game function//
  game();
