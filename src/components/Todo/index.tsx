import React from 'react';

import { DeleteIcon, DoneIcon } from '../../styles/Icons';

import { Container, ActionTypes } from './styles';

const Todo: React.FC = () => {
  return (
    <Container isCompleted={false}>
      <b>Alguma coisa</b>

      <ActionTypes>
        <DoneIcon />
        <DeleteIcon />
      </ActionTypes>
    </Container>
  );
};

export default Todo;
