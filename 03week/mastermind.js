'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint (guess, hint) {
  // your code here
  // current guess from user
  let currentGuess = arguments[0];
  let positionsChecked = []; // to avoid adding duplicates to the results

  let numHits = 0; // correct position
  let numContained = 0; // just contained - wrong position

  // init
  for (let i=0; i<4; i++){
  positionsChecked[i] = false; // set all positions in the secret string to unchecked
  }
  // 0 1 2 3
  // 'abcd' - 1-1
  // 'aabb'
  // calculate hits
  for (let i=0; i<4; i++){ // for every character in the current guess and solution
  if (currentGuess.charAt(i) === solution.charAt(i)) { //
  positionsChecked[i] = true; // set position to checked to not check again
  numHits++; // increase greens - contained at correct position
  }
  }

  // calculate only contained
  // 0 1 2 3
  // 'abcd' - 1-1
  // 'aabb'
  for(let i=0; i<4; i++){ // for every character in the current guess a b c d
  for (let j=0; j<4; j++){ // for every character in the solution
  if (currentGuess.charAt(i) === solution.charAt(j) // if there is a match
  && positionsChecked[j] === false // and we haven't checked the solution's character yet
  ){
  positionsChecked[j] = true; // set position to checked to not check again
  numContained++; // increae yellows - contained but wrong position
  }
  }
  }
  return numHits+'-'+numContained;
  }




function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  //generateSolution();
  solution.split('');
  guess.split('');
  if (solution === guess) {
    return 'You guessed it!';
  } else {
    board.push(guess.split(''));
    generateHint;
  }


  }


mastermind('abcd');
console.log(board);
// console.log((board[0])[0]);
console.log(solution);
// console.log(solution);
// console.log(typeof solution);




function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}


//Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
