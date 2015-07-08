/*

Define a function named "one" that takes a function as an argument and calls it.

Call your "one" function and pass it an anonymous function.

Call your "one" function and pass it a variable that points to a function.

*/

// define the function
var one = function (callback) {
  callback()
}

// call the function, passing it an anonymous function
one(function () {
  console.log("Yay!  I did it!");
})

// define a callback function separately
var someOther = function () {
  console.log("Passed this function as a variable.  #levelup");
}

// call your function, passing it a variable that points to a function
one(someOther)
