import React from 'react';
import { useTodo } from '../../hooks/todo';

import Todo from '../Todo';

import { Container } from './styles';

const TodoListContainter: React.FC = () => {
  const { todos } = useTodo();

  return (
    <Container>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          todo_name={todo.todo_name}
          is_completed={todo.is_completed}
        />
      ))}
    </Container>
  );
};

export default TodoListContainter;
