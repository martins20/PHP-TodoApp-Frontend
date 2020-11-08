import React from 'react';
import ITodoDTO from '../../dtos/ITodoDTO';

import { DeleteIcon, DoneIcon } from '../../styles/Icons';

import { Container, ActionTypes } from './styles';

const Todo: React.FC<Omit<ITodoDTO, 'id'>> = ({ todo_name, is_completed }) => {
  return (
    <Container isCompleted={is_completed}>
      <b>{todo_name}</b>

      <ActionTypes>
        <DoneIcon />
        <DeleteIcon />
      </ActionTypes>
    </Container>
  );
};

export default Todo;
