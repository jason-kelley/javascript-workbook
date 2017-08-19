// let object = [1, 2, 3];
//
// function filter(arr, callback) {
//   // Your code here
//    let filter = (object, callback) => {
//     let filtered = [];
//     for (let i = 0; i < object.length; i++) {
//       if (callback(object[i])) {
//         filtered.push(object[i]);
//       }
//     } return filtered;
//   }
// }
//
// filter (object, (item) => {
//     return item[0] === 1;
//   });
//

const colors = ['orange', 'red', 'blue', 'yellow', 'green', 'purple'];

// const startWithY = colors.some((color) => {
//   return color[0] === 'y';
// });

function startWithY (x, y) {
  let startWithY = colors.some((color));
  return colors[0] === 'y';
}

console.log(startWithY);
