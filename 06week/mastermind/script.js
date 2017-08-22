'use strict';
// document.addEventListener('DOMContentLoaded', () => {

  let solution = 'abcd';

  function generateHint(guess) {
    // your code here
    // current guess from user
    let currentGuess = guess;
    let positionsChecked = []; // to avoid adding duplicates to the results

    let numHits = 0; // correct position
    let numContained = 0; // just contained - wrong position

    // init
    for (let i = 0; i < 4; i++) {
      positionsChecked[i] = false; // set all positions in the secret string to unchecked
    }
    // 0 1 2 3
    // 'abcd' - 1-1
    // 'aabb'
    // calculate hits
    for (let i = 0; i < 4; i++) { // for every character in the current guess and solution
      if (currentGuess.charAt(i) === solution.charAt(i)) { //
        positionsChecked[i] = true; // set position to checked to not check again
        numHits++; // increase greens - contained at correct position
      }
    }

    // calculate only contained
    // 0 1 2 3
    // 'abcd' - 1-1
    // 'aabb'
    for (let i = 0; i < 4; i++) { // for every character in the current guess a b c d
      for (let j = 0; j < 4; j++) { // for every character in the solution
        if (currentGuess.charAt(i) === solution.charAt(j) // if there is a match
          &&
          positionsChecked[j] === false // and we haven't checked the solution's character yet
        ) {
          positionsChecked[j] = true; // set position to checked to not check again
          numContained++; // increae yellows - contained but wrong position
        }
      }
    }
    return numHits + '-' + numContained;
  }

    function playGuess() {

      let guess = document.getElementById('yourGuess').value;

      let hint = generateHint(guess);
      document.querySelector('.flex-container-2').insertAdjacentHTML('afterbegin', `
      <div class="row">
        <div data-cell>${guess[0]}</div>
        <div data-cell>${guess[1]}</div>
        <div data-cell>${guess[2]}</div>
        <div data-cell>${guess[3]}</div>
      </div>
      `);

      document.querySelector('.flex-container-3').insertAdjacentHTML('afterbegin', `
      <div class="row">
        <div data-cell>${hint}</div>
      </div>
      `);


      if (guess === solution) {
        //document.getElementById('headline').innerHTML = 'You Guessed It!';
        let solutionArr = solution.split('');
        console.log(solutionArr);
        document.querySelector('.solutionRow').innerHTML = '';
        document.querySelector('.solutionRow').insertAdjacentHTML('afterbegin', `
        <div class="row">
          <div data-cell>${solutionArr[0]}</div>
          <div data-cell>${solutionArr[1]}</div>
          <div data-cell>${solutionArr[2]}</div>
          <div data-cell>${solutionArr[3]}</div>
          <div data-cell>Win!</div>
        </div>
        `);
      }
    }

// });
