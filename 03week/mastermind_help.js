// 1. 'hello' is a string data type assigned to the variable str. Use a string method to change 'hello' into
// ['h', 'e','l', 'l','o']. Store your new array value in the same variable.

var str = 'hello';
str = str.split('');
console.log(str);



// 2. arr1 and arr2 are variables that have been assigned array data types
// without using a loop, check if the first element of arr1 is equal to the first element of arr2

// without using a loop, check if the first element of arr1 is equal to the third element of arr2

// without using a loop, check if the last element of arr1 is equal to the last element of arr2

function checkArr () {
  var arr1 = [1, 2, 3, 4, 5];
  var arr2 = [2, 4, 3, 7, 5];

  if (arr1[0] = arr2[0]) {
    console.log('it does');
  } else if (arr1[0] = arr2[2]) {
    console.log('it does');
  } else if (arr1[4] = arr2[4]) {
    console.log('it does');
  }
}

console.log(checkArr());



// 3. define a function name myArrayFunc that
// a) has one parameter, an array named arr3
// b) inside of your function console.log the length of the array
// c) call the function below your function definition. be sure to pass in the proper value for the parameter arr3

 function myArrayFunc (arr3) {
  console.log(arr3.length);
}
console.log(myArrayFunc([1, 2, 3]));

//4
// change the value of the third element in the following array to 'hello'
// change the value of the last element in the following array to 'nice to see you

//var arr4 = [1, 2, 3, 4, 5, 10]

function mutateArray (arr4) {
  arr4.splice(2, 1, 'hello');
  arr4.splice(5, 1, 'nice to see you');
  return arr4;

}
console.log(mutateArray([1, 2, 3, 4, 5, 10]));


//5 Use the indexOf method to return the index of the letter 'a' in the following array and assign it to a variable called myIndexVar
// var arr5 = ['b', 'e', 'a', 'j']
// var myIndexVar = //

let arr5 = ['b', 'e', 'a', 'j'];
let myIndexVar = arr5.indexOf('a');
console.log(myIndexVar);
