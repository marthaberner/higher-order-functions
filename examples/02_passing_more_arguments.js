/*

Define a function named "hitMeBack" that takes:

- an argument named `cb` which is a function

Inside `hitMeBack`, call `cb` and pass it a few arguments.

Execute `hitMeBack` passing an anonymous function that console logs its arguments

Execute `hitMeBack` passing a variable that points to a function that console logs its arguments

*/

function hitMeBack (cb, arg1, arg2, arg3) {
  cb(arg1, arg2, arg3);
};

hitMeBack(function(arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3);
}, "Banana", "apple", 23);

var myFunc = function(arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3);
}

hitMeBack(myFunc, "HELLO", "GOODBYE", 15);
