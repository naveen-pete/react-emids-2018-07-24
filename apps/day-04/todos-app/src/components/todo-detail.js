import React from 'react';
import { connect } from 'react-redux';

import { deleteTodo, toggleTodo } from '../redux/actions';

// Class based component
// class TodoDetail extends Component {
//   render() {
//     return (
//       <div className="card w-50 text-white bg-info mb-3">
//       <div className="card-body">
//         <h5 className="card-title">{this.props.todo.text}</h5>
//         <p className="card-text"><strong>Status:</strong> <em>Pending / Done</em></p>
//         <button className="btn btn-warning btn-sm">Delete</button>
//         <button className="btn btn-sm">Toggle Status</button>
//       </div>
//     </div>  
//     );
//   }
// }

// Stateless Functional Component
const TodoDetail = (props) => {
  const { text, done, id } = props.todo;
  return (
    <div className={`card text-white mb-3 ${done ? 'bg-success' : 'bg-info'}`}>
      <div className="card-body">
        <h5 className="card-title">{text}</h5>
        <p className="card-text"><strong>Status:</strong> <em>{done ? 'Done' : 'Pending'}</em></p>
      </div>
      <div className="card-footer">
        <button className="btn btn-sm mr-2" onClick={() => props.toggleTodo(id)}>Toggle Status</button>
        <button className="btn btn-warning btn-sm" 
            onClick={() => props.deleteTodo(id)}>Delete</button>
      </div>
    </div>  
  );
}

export default connect(null, { deleteTodo, toggleTodo })(TodoDetail);
