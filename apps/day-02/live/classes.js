// class Plane {
//   constructor(numEngines) {
//     this.numEngines = numEngines;
//     this.enginesActive = false;
//   }

//   startEngines() {
//     console.log('starting engines…');
//     this.enginesActive = true;
//   }

//   static badWeather(...planes) {
//     for (let plane of planes) {
//       plane.enginesActive = false;
//     }
//   }
// }

// const civilPlane = new Plane(2);
// civilPlane.startEngines();

// const fighterPlane = new Plane(4);
// fighterPlane.startEngines();

// console.log('before civilPlane:', civilPlane);
// console.log('before fighterPlane:', fighterPlane);

// Plane.badWeather(civilPlane, fighterPlane);

// console.log('after civilPlane:', civilPlane);
// console.log('after fighterPlane:', fighterPlane);

// constructor function
function Plane(numEngines) {
  this.numEngines = numEngines;
  this.enginesActive = false;

  this.startEngines = function () {
    console.log('starting engines...');
    this.enginesActive = true;
  };
}

// Plane.prototype.startEngines = function () {
//   console.log('starting engines...');
//   this.enginesActive = true;
// };

const p1 = new Plane(2);
p1.startEngines();
console.log(p1);

const p2 = new Plane(4);
p2.startEngines();
console.log(p2);