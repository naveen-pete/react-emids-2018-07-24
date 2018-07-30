import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { getTodos } from './redux/actions';
import TodoForm from './components/todo-form';
import TodoDetail from './components/todo-detail';
// import * as TodoApi from './api/todo-api';

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   todos: [
    //     {
    //       "id": 1,
    //       "text": "Get vegetables",
    //       "done": false
    //     },
    //     {
    //       "id": 2,
    //       "text": "Leave bike for service",
    //       "done": true
    //     },
    //     {
    //       "text": "todo 1",
    //       "done": false,
    //       "id": 3
    //     },
    //     {
    //       "text": "todo 2",
    //       "done": true,
    //       "id": 4
    //     }
    //   ]
    // };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    this.props.getTodos()
    // TodoApi.getTodos()
    //   .then(todos => {
    //     console.log('Success: Get todos successful.')
    //     this.setState({ todos }); 
    //   })
    //   .catch(error => {
    //     console.log('Error: Get todos failed.', error)
    //   });
  }

  handleAdd(todoText) {
    debugger;
    const len = this.state.todos.length;
    let id = len > 0
      ? this.state.todos[len - 1].id + 1
      : 1;
    const newTodo = { id: id, text: todoText, done: false };

    const todos = [...this.state.todos, newTodo]; 
    this.setState({ todos }); 

    // TodoApi.addTodo(newTodo)
    //   .then(todo => {
    //     console.log('Success: Add todo successful.', todo);

    //     const todos = [...this.state.todos, todo]; 
    //     this.setState({ todos }); 
    //   })
    //   .catch(error => {
    //     console.log('Error: Add todo failed.', error)
    //   });
  }

  handleToggle(id) {
    const todo = this.state.todos.find(t => t.id === id)
    const updatedTodo = { ...todo, done: !todo.done };

    this.setState((prevState) => {
      const todos = prevState.todos.map(t => {
        return t.id === id ? { ...updatedTodo } : t;
      });
      return { todos };
    });

    // TodoApi.updateTodo(updatedTodo)
    //   .then((td) => {
    //     console.log('Success: Update todo successful.', td);

    //     this.setState((prevState) => {
    //       const todos = prevState.todos.map(t => {
    //         return t.id === id ? { ...td } : t;
    //       });
    //       return { todos };
    //     });
    //   })
    //   .catch(error => {
    //     console.log('Error: Update todo failed.', error)
    //   });
  }

  handleDelete(id) {
    this.setState((prevState) => {
      const todos = prevState.todos.filter(t => t.id !== id);
      return { todos };
    });

    // TodoApi.deleteTodo(id)
    //   .then(() => {
    //     console.log('Success: Delete todo successful.');

    //     this.setState((prevState) => {
    //       const todos = prevState.todos.filter(t => t.id !== id);
    //       return { todos };
    //     });
    //   })
    //   .catch(error => {
    //     console.log('Error: Delete todo failed.', error)
    //   });
  }

  render() {
    const todoComponents = this.props.todos.map(
      t => (<TodoDetail key={t.id} todo={t} />)
    );

    return (
      <div className="container">
        <h2>Todos App</h2>
        <div className="row">
          <div className="col-md-5">
            <h4>Todo Form</h4>
            <TodoForm />
          </div>
          <div className="col-md-7">
            <h4>Todo List</h4>
            {todoComponents}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.todos };
}

export default connect(mapStateToProps, { getTodos } )(App);
