import React, { Component } from 'react';
import './App.css';

import TodoForm from './components/todo-form';
import TodoDetail from './components/todo-detail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          text: 'Get veggies',
          done: false
        },
        {
          id: 2,
          text: 'Give bike to service',
          done: false
        },
        {
          id: 3,
          text: 'Go to piano classes',
          done: false
        }
      ]
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todoText) {
    const id = this.state.todos[this.state.todos.length - 1].id + 1;
    const newTodo = { text: todoText, done: false, id: id };

    this.setState((prevState) => {
      const todos = [ newTodo, ...prevState.todos ];
      return { todos };
    });
  }

  render() {
    const todoComponents = this.state.todos.map(t => (<TodoDetail key={t.id} todo={t} />));

    return (
      <div className="container">
        <h2>Todos App</h2>
        <div className="row">
          <div className="col-md-5">
            <h4>Todo Form</h4>
            <TodoForm onAdd={this.addTodo} />
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
