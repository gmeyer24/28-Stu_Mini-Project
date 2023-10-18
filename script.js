console.log("Let's Play!");

game = {
  wins: 0,
  losses: 0,
  ties: 0,
  computerChoice: "",
  playerChoice: "",
  choices: ["R", "P", "S"],
  pickComputerChoice() {
    var randomIndex = Math.floor(Math.random() * this.choices.length);
    this.computerChoice = this.choices[randomIndex];
  },
  getPlayerChoice(choice) {
    this.playerChoice = choice;
  },

//   getComputerChoice (selection){
//     this.computerChoice = selection;
//   },

  adjuticateGame() {
    // check for a tie
    if (this.computerChoice == this.playerChoice) {
      this.ties++;
      alert("You tied!");
    } else if (
      (this.playerChoice == "R" && this.computerChoice == "S") ||
      (this.playerChoice == "S" && this.computerChoice == "P") ||
      (this.playerChoice == "P" && this.computerChoice == "R")) {
      this.wins++;
      alert("You Won!")
    } else {
      this.losses++;
      alert("You Lost!");
    }
    // check for a win
    // else loss
  },

  displayStats() {
    alert(`Game Stats:
    Wins: ${this.wins}
    Losses: ${this.losses}
    Ties: ${this.ties}`);
  }
}

var isPlaying = true;
while(isPlaying) {
game.getPlayerChoice(prompt(`pick ${game.choices}`));
game.pickComputerChoice();
// game.getComputerChoice(alert(`Computer chose ${game.pickComputerChoice}`));
console.log(game);
game.adjuticateGame();
game.displayStats();
isPlaying = confirm("Play again?")
}
