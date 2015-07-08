/*

Define a function named "eachy" that takes:

- an argument named `list` which is an array
- an argument named `callback` which is a function

Inside `eachy`, set up a for loop that goes over the array.  Inside the for loop,
call `callback` and pass it both:

- the item from the array
- the counter (probably `i`)

Execute `eachy` passing it an array of items and anonymous function that
console logs the arguments.

Execute `eachy` passing it a variable that points to function that console logs the arguments.

*/

function eachy(list, callback) {
  for(i = 0; i < list.length; i++) {
    callback(list[i], i);
  }
}
var myArray = ["hello", "goodbye", "maybe"];

eachy(myArray, function(item, index){
  console.log(item, index);
});

var myFunc = function(item, index) {
  console.log(item, index);
}

eachy(["eeny", "meeny", "miny", "moe"], myFunc)
