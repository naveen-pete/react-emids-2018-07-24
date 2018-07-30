import * as TodoActionTypes from './actions';

const initialStateTodos = [
    // {
    //   "id": 1,
    //   "text": "Get vegetables",
    //   "done": false
    // }
    // ,
    // {
    //   "id": 2,
    //   "text": "Leave bike for service",
    //   "done": true
    // },
    // {
    //   "text": "todo 1",
    //   "done": false,
    //   "id": 3
    // },
    // {
    //   "text": "todo 2",
    //   "done": true,
    //   "id": 4
    // }
  ];

export default function todosReducer(state = initialStateTodos, action) {
  console.log(action);
  switch(action.type) {
    case TodoActionTypes.ADD_TODO:
      var newState = [...state, action.payload ]
      return newState;

    case TodoActionTypes.DELETE_TODO:
      var newState = state.filter(t => t.id !== action.payload);
      return newState;

    case TodoActionTypes.TOGGLE_TODO:
      var newState = state.map(t => {
        return t.id === action.payload ? { ...t, done: !t.done } : t;
      });
      return newState;

    case TodoActionTypes.GET_TODOS:
      var newState = [...action.payload ];
      return newState; 

    default:
      return state;
  }
}
