import React from 'react';
import Todo from '../Todo';

import { Container } from './styles';

const TodoListContainter: React.FC = () => {
  return (
    <Container>
      <Todo />
    </Container>
  );
};

export default TodoListContainter;
