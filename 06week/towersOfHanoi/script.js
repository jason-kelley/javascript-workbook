'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let block = {};
  let stack = {};
  function checkForWin () {
    let stack2 = document.querySelector('[data-stack="2"]');
    let stack3 = document.querySelector('[data-stack="3"]');
    if (stack2.children.length === 4 || stack3.children.length === 4) {
      return document.getElementById('announce-game-won').innerHTML = 'you win';
    }
  }


  document.querySelectorAll('[data-block]').forEach((div) => {
    div.addEventListener('click', (e) => {
    e.stopPropagation();

      block = {
        size: e.target.attributes[0].value,
        target: e.target,
        top: e.target.parentNode.children[e.target.parentNode.children.length - 1]
      };

      if (block.target !== block.top) {
        alert ('This is not the top block');
      } else {
        e.target.parentNode.removeChild(e.target);
      }
    });

    document.querySelectorAll('[data-stack]').forEach((div) => {
      div.addEventListener('click', (e) => {
      e.stopPropagation();

      stack = {
        top: e.target.children[e.target.children.length - 1],
        size: e.target.children.length
      };

        if (stack.size === 0 || stack.top.attributes[0].value > block.top.attributes[0].value) {
          e.target.appendChild(block.target);
          checkForWin();
        }

      });
    });
  });
});
