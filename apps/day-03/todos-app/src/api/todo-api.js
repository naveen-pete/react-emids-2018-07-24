const apiUrl = 'http://localhost:3001/todos';

export const getTodos = () => {
  return fetch(apiUrl).then(response => response.json())
}

export const addTodo = (todo) => {
  return fetch(apiUrl, {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify(todo)
  }).then(response => response.json())
}

export const updateTodo = (todo) => {
  return fetch(`${apiUrl}/${todo.id}`, {
    method: 'PATCH',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify(todo)
  }).then(response => response.json())
}

export const deleteTodo = (id) => {
  return fetch(`${apiUrl}/${id}`, {
    method: 'DELETE'
  }).then(response => response.json())
}