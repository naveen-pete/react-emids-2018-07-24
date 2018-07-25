function greet(name, formatter) {
  return "Hello, " + formatter(name);
}

// --------------------------------------
// Example #1 - Named callback functions
// function upperCaseName(name) {
//   return name.toUpperCase();
// }

// function lowerCaseName(name) {
//   return name.toLowerCase();
// }

// function exclamatoryName(name) {
//   return name + '!!!';
// }

// console.log(greet("Tim", upperCaseName));

// console.log(greet("Tim", lowerCaseName));

// console.log(greet("Tim", exclamatoryName));

// --------------------------------------
// Example #2 - Anonymous callback functions
// console.log(greet("Tim", function (name) {
//   return name.toUpperCase();
// }));

// console.log(greet("Tim", function (name) {
//   return name.toLowerCase();
// }));

// console.log(greet("Tim", function (name) {
//   return name + '!!!';
// }));

// --------------------------------------
// Example #3 - Arrow callback functions
console.log(greet("Tim", name => name.toUpperCase()));

console.log(greet("Tim", name => name.toLowerCase()));

console.log(greet("Tim", name => name + '!!!'));