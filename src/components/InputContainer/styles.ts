import styled from 'styled-components';
import { Form as unformFormComponent } from '@unform/web';

export const Container = styled.section`
  display: flex;
  flex-direction: row;

  align-items: center;
  width: 100%;

  max-width: 900px;
  min-width: 300px;

  border: 1px solid #dfdfdf;

  background: #f2f2f2;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  padding: 10px 20px;
`;

export const Form = styled(unformFormComponent)`
  width: 100%;
`;
