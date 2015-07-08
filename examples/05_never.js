/*

Define a function named "neverNever" that takes:

- an argument named `callback` which is a function

Inside `neverNever`, do nothing.

Execute `neverNever` passing it an anonymous function that console logs something.

Execute `neverNever` passing it a variable that points to function that console logs something.

NOTE: you should see no output when you run this.

*/

function neverNever(callback) {};

neverNever(function() {
  console.log("I won't even see this");
});

var myFunc = function () {
  console.log("I won't see this named one either");
}

neverNever(myFunc)
