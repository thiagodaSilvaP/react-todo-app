import React from 'react';

import { TasksProvider } from '../contexts/TasksContexts';

import { Todo } from './Todo';

import { Container } from './style';

function App() {
  return (
    <Container>
      <TasksProvider>
        <Todo />
      </TasksProvider>
    </Container>
  );
}

export default App;
