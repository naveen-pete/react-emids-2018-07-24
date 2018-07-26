import React from 'react';

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
    <div className="card text-white bg-info mb-3">
      <div className="card-body">
        <h5 className="card-title">{text}</h5>
        <p className="card-text"><strong>Status:</strong> <em>{done ? 'Done' : 'Pending'}</em></p>
        <button className="btn btn-warning btn-sm" onClick={() => props.onDelete(id)}>Delete</button>
        <button className="btn btn-sm" onClick={() => props.onToggle(id)}>Toggle Status</button>
      </div>
    </div>  
    );
}

export default TodoDetail;