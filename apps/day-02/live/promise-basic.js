function withdraw(amount) {
  console.log('withdraw operation started.');
  let p = new Promise((resolve, reject) => {
    // xhr request
    setTimeout(() => {
      console.log('withdraw operation finished.');
      // resolve('withdraw successful');
      reject('insufficient balance');
    }, 3000)

  });

  return p;

}

console.log('begin tasks');
const p = withdraw(100);
p.then((res) => {
  console.log('success:', res)
});
p.catch((err) => {
  console.log('failed:', err)
});
console.log('apply loan');
console.log('end tasks');