import React from 'react';
import './App.css';
import Header from './components/Header/component.Header';
import TodoList from './components/TodoList/component.TodoList';

function App() {
  return (
    <>
      <Header />
      <TodoList />
    </>
  );
}

export default App;