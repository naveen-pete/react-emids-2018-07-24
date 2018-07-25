get('https://jsonplaceholder.typicode.com/users?username=Samantha')
  .then(users => console.log('users:', users))
  .catch((error) => {
    console.log('failed:', error);
  });