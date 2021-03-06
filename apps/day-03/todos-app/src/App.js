import React, { Component } from 'react';
import './App.css';

import TodoForm from './components/todo-form';
import TodoDetail from './components/todo-detail';
import * as TodoApi from './api/todo-api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    TodoApi.getTodos()
      .then(todos => {
        console.log('Success: Get todos successful.')
        this.setState({ todos }); 
      })
      .catch(error => {
        console.log('Error: Get todos failed.', error)
      });
  }

  handleAdd(todoText) {
    const newTodo = { text: todoText, done: false };

    TodoApi.addTodo(newTodo)
      .then(todo => {
        console.log('Success: Add todo successful.', todo);

        const todos = [...this.state.todos, todo]; 
        this.setState({ todos }); 
      })
      .catch(error => {
        console.log('Error: Add todo failed.', error)
      });
  }

  handleToggle(id) {
    const todo = this.state.todos.find(t => t.id === id)
    const updatedTodo = { ...todo, done: !todo.done };
    TodoApi.updateTodo(updatedTodo)
      .then((td) => {
        console.log('Success: Update todo successful.', td);

        this.setState((prevState) => {
          const todos = prevState.todos.map(t => {
            return t.id === id ? { ...td } : t;
          });
          return { todos };
        });
      })
      .catch(error => {
        console.log('Error: Update todo failed.', error)
      });
  }

  handleDelete(id) {
    TodoApi.deleteTodo(id)
      .then(() => {
        console.log('Success: Delete todo successful.');

        this.setState((prevState) => {
          const todos = prevState.todos.filter(t => t.id !== id);
          return { todos };
        });
      })
      .catch(error => {
        console.log('Error: Delete todo failed.', error)
      });
  }

  render() {
    const todoComponents = this.state.todos.map(
      t => (<TodoDetail onDelete={this.handleDelete} onToggle={this.handleToggle} key={t.id} todo={t} />)
    );

    return (
      <div className="container">
        <h2>Todos App</h2>
        <div className="row">
          <div className="col-md-5">
            <h4>Todo Form</h4>
            <TodoForm onAdd={this.handleAdd} />
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

export default App;
