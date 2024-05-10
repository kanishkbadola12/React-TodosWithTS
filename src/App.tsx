import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/Todo';
import TodosContextProvider from './store/todos-context';

function App() {
  return (
    <TodosContextProvider>
      <div className="App">
        <NewTodo />
        <Todos />
      </div>
    </TodosContextProvider>
  );
}

export default App;
