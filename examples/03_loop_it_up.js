/*

Define a function named "fiver" that takes:

- an argument named `cb` which is a function

Inside `fiver`, set up a for loop that runs 5 times, calling the function each time.

Execute `fiver` passing an anonymous function that logs something.

Execute `fiver` passing a variable that points to a function that logs something.

*/

function fiver(cb) {
  for (var i = 0; i < 5; i++) {
    cb();
  }
}

fiver(function() {
  console.log("exercise 3");
});

var myFunc = function() {
  console.log("my Func");
};

fiver(myFunc);
