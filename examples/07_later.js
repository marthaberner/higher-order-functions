/*

Define a function named "laterLater" that takes:

- an argument named `callback` which is a function

Inside `laterLater`, use a `setTimeout` to call `callback` at some point in the future.

Execute `laterLater` passing it an anonymous function that console logs the arguments.

Execute `laterLater` passing it a variable that points to function that console logs the arguments.

*/

function laterLater(callback, arg1, arg2) {
  setTimeout(callback(arg1, arg2), 3000);
}

laterLater(function(arg1, arg2) {
  console.log(arg1, arg2);
}, "in 3 seconds", "I appear");

var myFunc = function(arg1, arg2) {
  console.log(arg1, arg2);
}

laterLater(myFunc, "I am a named func", "goodbye");
