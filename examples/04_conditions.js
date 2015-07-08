/*

Define a function named "maybeMaybe" that takes:

- an argument named `doIt` which is expected to be a boolean
- an argument named `onSuccess` which is a function
- an argument named `onFailure` which is a function

Inside `maybeMaybe`, set up a conditional.  If `doIt` is truthy, execute `onSuccess`.  Otherwise execute `onFailure`.

Execute `maybeMaybe` passing it two anonymous functions that log something.

Execute `maybeMaybe` passing it two variables that point to functions that log something.

Execute `maybeMaybe` passing it one anonymous function, and one variable that points to a function that log something.

*/

function maybeMaybe(doIt, onSuccess, onFailure) {
  if(doIt) {
    onSuccess();
  } else {
    onFailure();
  }
};

maybeMaybe(null, function() {
  console.log("Success!!");
}, function() {
  console.log("Failure!");
});

var myFailFunc = function() {
  console.log("Named variable fail!");
};

var mySuccessFunc = function() {
  console.log("Named func success!");
};

maybeMaybe(true, mySuccessFunc, myFailFunc);

maybeMaybe(true, function() {
  console.log("Successful anonymous func!");
}, myFailFunc);
