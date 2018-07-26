import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = { todoText: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.todoText);
    this.setState({ todoText: ''})
  }

  handleChange(e) {
    this.setState({todoText: e.target.value});
  }

  render() {
    return (
      <div className="card bg-light mb-3">
        <div className="card-body">
          <form id="customerForm" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="txtTodoText">Todo</label>
              <input type="text" 
                className="form-control" 
                id="txtTodoText" 
                placeholder="Enter todo" 
                name="txtTodoText" 
                value={this.state.todoText}
                onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoForm;
