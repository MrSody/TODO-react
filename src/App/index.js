import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

import './App.css';

/* const defaultTodos = [
  { text: 'cortar cebolla', completed: false },
  { text: 'Intro a react', completed: false },
  { text: 'llorar con la llorona', completed: false },
]; */



function App() {

  

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
