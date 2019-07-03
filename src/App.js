import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

function getUser(userId) {
  return users.find(user => user.id === userId);
}

const todosWithUser = todos.map((todo) => {
  return {
    ...todo,
    user: getUser(todo.userId),
  };
});

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>

      <TodoList todos = {todosWithUser} />

    </div>
  );
};

const TodoList = (props) => (
  <ul>
    {props.todos.map(todo => (
      <TodoItem todo = {todo}/>
    ))}
  </ul>
);

const TodoItem = (props) => (
  <li>
    <input type="checkbox" checked = {props.todo.completed} />
    <div>{props.todo.title}</div>
    <User user = {props.todo.user}/>
  </li>
);

const User = (props) => (
  <div>{props.user.name}</div>
);

export default App;
