import * as TodoAPI from '../api/todo-api';

// Action Types
export const ADD_TODO = 'ADD_TODO';
export const GET_TODOS = 'GET_TODOS';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// Action creator
export function addTodo(todo) {
  const request = TodoAPI.addTodo(todo);
  
  // Action
  return {
    type: ADD_TODO,
    payload: request
  };
}

// Action creator
export function getTodos() {
  const request = TodoAPI.getTodos();

  // Action
  return {
    type: GET_TODOS,
    payload: request
  };
}

// Action creator
export function deleteTodo(id) {
  
  // Action
  return {
    type: DELETE_TODO,
    payload: id
  };
}

// Action creator
export function toggleTodo(id) {
  
  // Action
  return {
    type: TOGGLE_TODO,
    payload: id
  };
}
