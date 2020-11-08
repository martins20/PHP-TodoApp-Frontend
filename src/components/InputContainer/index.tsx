import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import { useTodo } from '../../hooks/todo';

import Input from './Input';

import { AddIcon } from '../../styles/Icons';
import { Container, Form } from './styles';

interface FormData {
  todo_name: string;
}

const InputContainer: React.FC = () => {
  const { handleAddNewTodo } = useTodo();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        const sheema = Yup.object().shape<FormData>({
          todo_name: Yup.string().required('Todo name is required').trim(),
        });

        await sheema.validate(data, { abortEarly: false });

        await handleAddNewTodo(data.todo_name.trim());
        formRef.current?.reset();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        console.log(err);
      }
    },
    [handleAddNewTodo],
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Input
          name="todo_name"
          placeholder="Add a new todo here ..."
          onChange={() => formRef.current?.setFieldError('todo_name', '')}
        />
      </Form>
      <AddIcon onClick={formRef.current?.submitForm} />
    </Container>
  );
};

export default InputContainer;
