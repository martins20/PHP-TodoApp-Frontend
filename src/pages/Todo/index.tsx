import React from 'react';

import InputContainer from '../../components/InputContainer';
import TodoListContainer from '../../components/TodoListContainer';

import { Container } from './styles';

const Todo: React.FC = () => {
  return (
    <Container>
      <h1>Todo List</h1>

      <InputContainer />

      <TodoListContainer />
    </Container>
  );
};

export default Todo;
