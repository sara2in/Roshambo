const inquirer = require('inquirer');
//Logic for entire game is stored here
class Game {
    constructor () {
        this.choices = [ 'Rock', 'Paper', 'Scissors' ];
    }
    static compute (player, computer) {
        //rock beats scissors
        if(player === 'Rock' && computer === 'Scissors' ){return 'You win!'};
        if(computer === 'Rock'  && player === 'Scissors' ){return 'Computer wins!'};
        //scissors beats paper
        if(player === 'Scissors' && computer === 'Paper' ){return 'You win!'};
        if(computer === 'Scissors'  && player === 'Paper' ){return 'Computer wins!'};
        //paper beats rock
        if(player === 'Paper' && computer === 'Rock' ){return 'You win!'};
        if(computer === 'Paper'  && player === 'Rock' ){return 'Computer wins!'};
        //same choice picked
        if(computer === 'Paper'  && player === 'Paper' ){return `It's a tie!`};
        if(computer === 'Rock'  && player === 'Rock' ){return `It's a tie!`};
        if(computer === 'Scissors'  && player === 'Scissors' ){return `It's a tie!`};
    }
}

//Generate a new player with a choice
class Player extends Game  {
    constructor (choice) {
        super();
        this.choice = choice;
    }
}

//Genterates the computers play
class Computer extends Game {
    constructor () {
        super();
        this.choice = this.choices[Math.floor(Math.random() * (2 - 0 + 1)) + 0];
    }
}
//Runs console
makeChoice();
//Creates console interface for user's choice
function makeChoice () {
inquirer
  .prompt([
    {
        type: 'list',
        message: 'Use arrow keys: Rock, paper, or scissor?',
        choices: [ 'Rock', 'Paper', 'Scissors'],
        name: 'choice'
    }
  ])
  .then((input) => {
    //Creates a new instance of user with choice
    let player = new Player(input.choice);
    console.log(`You pick ${player.choice}`)
    //Creates a new instance of computer with new choice
    let computer = new Computer();
    console.log(`Computer picks ${computer.choice}`)
    //Runs game logic with choices
    let winner = Game.compute(player.choice, computer.choice); 
    console.log(winner);
  })
}

