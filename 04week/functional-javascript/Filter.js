//
// let messages = [{message: 'a'}, {message: 'ab'}, {message: 'abcd'}];
//
// function getShortMessages (messages) {
//       // SOLUTION GOES HERE
//   let array = [];
//   let shortMessages = messages.filter(x => x.message.length < 3);
//   shortMessages.forEach(function (message, i) {
//     array.push(shortMessages[i].message);
//   });
//    return array;
//     }
//
// console.log(getShortMessages([{message: 'a'}, {message: 'ab'}, {message: 'abcd'}]));
//


    //module.exports = getShortMessages;

    // figure out how to return the message only from the object in the array
    function getShortMessages (messages) {
    //       // SOLUTION GOES HERE
        let array = [];
        let shortMessages = messages.filter(x => x.message.length < 50);
        shortMessages.forEach(function (message, i) {
          array.push(shortMessages[i].message);
        });
         return array;
          }

    module.exports = getShortMessages;
