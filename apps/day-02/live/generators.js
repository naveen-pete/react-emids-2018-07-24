const engineeringTeam = {
  size: 5,
  department: 'Engineering',
  lead: 'Hari',
  manager: 'Krish',
  engineer: 'Ram'
};

function* teamIterator(team) {
  console.log('before yield lead');
  yield team.lead;

  console.log('before yield manager');
  yield team.manager;

  console.log('before yield engineer');
  yield team.engineer;

  console.log('done!');
}

const employees = [];

// const iterator = teamIterator(engineeringTeam);
// var retVal;
// retVal = iterator.next();
// console.log(retVal);

// retVal = iterator.next();
// console.log(retVal);

// retVal = iterator.next();
// console.log(retVal);

// retVal = iterator.next();
// console.log(retVal);

for (let name of teamIterator(engineeringTeam)) {
  employees.push(name);
}
console.log(employees);