// Function definition

var addES5 = function (a, b) {
  return a + b;
}

// Arrow function syntax
// #1
// var add = (a, b) => {
//   return a + b;
// }

// Arrow function syntax
// #2
// var add = (a, b) => a + b; // return a + b

// var x = addES5(10, 20);
// console.log('x:', x);

// var y = add(100, 200);
// console.log('y:', y);

// var double = (x) => x * 2;

// var double = x => x * 2;

// console.log('double():', double(10));

var getCustomer = id => ({
  name: 'hari',
  phone: '12345'
});

console.log('customer:', getCustomer(10));