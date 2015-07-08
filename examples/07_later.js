/*

Define a function named "laterLater" that takes:

- an argument named `callback` which is a function

Inside `laterLater`, use a `setTimeout` to call `callback` at some point in the future.

Execute `laterLater` passing it an anonymous function that console logs the arguments.

Execute `laterLater` passing it a variable that points to function that console logs the arguments.

*/

function laterLater(callback) {
  setTimeout(callback, 3000);
}

laterLater(function(arg1, arg2) {
  console.log("in 3 seconds", "I appear");
});

var myFunc = function() {
  console.log("I am a named func, goodbye");
}

laterLater(myFunc);
