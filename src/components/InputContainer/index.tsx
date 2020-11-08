import React, { useRef } from 'react';
import { FormHandles } from '@unform/core';

import Input from './Input';
import { AddIcon } from '../../styles/Icons';

import { Container, Form } from './styles';

const InputContainer: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Container>
      <Form onSubmit={data => console.log(data)} ref={formRef}>
        <Input name="todo_name" placeholder="Add a new todo here ..." />
      </Form>
      <AddIcon />
    </Container>
  );
};

export default InputContainer;
