// Understand the concept of hoisting
// Introducing let and const to declare variable

const v = 50;
console.log('v =', v);

var x = 10;

function a() {
  console.log('within a(): x=', x);

  var y = 20;

  console.log('within a(): y=', y);

  if (y == 20) {
    let z = 30;

    console.log('within a(), and if: z=', z);
  }

  // console.log('within a(), and outside if: z=', z);

}

a();

console.log('outside a(): x=', x);
// console.log('outside a(): y=', y);