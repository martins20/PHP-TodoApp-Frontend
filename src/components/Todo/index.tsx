import React from 'react';
import ITodoDTO from '../../dtos/ITodoDTO';
import { useTodo } from '../../hooks/todo';

import { DeleteIcon, DoneIcon } from '../../styles/Icons';

import { Container, ActionTypes } from './styles';

const Todo: React.FC<ITodoDTO> = ({ id, todo_name, is_completed }) => {
  const { handleDeleteTodo, handleToggleCompleteTodo } = useTodo();

  return (
    <Container isCompleted={is_completed}>
      <b>{todo_name}</b>

      <ActionTypes>
        <DoneIcon onClick={() => handleToggleCompleteTodo(id)} />
        <DeleteIcon onClick={() => handleDeleteTodo(id)} />
      </ActionTypes>
    </Container>
  );
};

export default Todo;
