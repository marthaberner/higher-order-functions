/*

Define a function named "asYouWere" that takes:

- an argument named `color`
- an argument named `cb` which is a function

Inside `asYouWere`, call `cb` and pass it `color`

Execute `asYouWere` passing an anonymous function that console logs its argument

Execute `asYouWere` passing a variable that points to a function that console logs its argument

*/

function asYouWere(color, cb) {
  cb(color);
}

var myFunc = function(color) {
  console.log(color);
}

asYouWere("RED", function(color) {
  console.log(color);
});

asYouWere("GREEN", myFunc);
