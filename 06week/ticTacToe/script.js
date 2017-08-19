'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let toggle = true;
  let array = [];
  document.querySelectorAll('[data-cell]').forEach(div => {
    div.addEventListener('click', (e) => {
      if (!e.target.innerHTML) {
      toggle = !toggle;

      } else {
        alert('seats taken');
      }
    });
  });
});

//----------------




//----------------
 function clearBoard() {
   document.querySelectorAll('[data-cell]').forEach(div => div.innerHTML = '');
 }
