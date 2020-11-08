import styled, { css } from 'styled-components';

interface ContainerProps {
  isCompleted: boolean;
}

export const Container = styled.section<ContainerProps>`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  width: 100%;

  max-width: 900px;
  min-width: 300px;

  border: 1px solid #dfdfdf;

  background: #f2f2f2;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  padding: 10px 20px;

  > b {
    font-size: 1.2rem;
    word-break: break-all;
    width: 80%;

    ${props =>
      props.isCompleted &&
      css`
        color: #ccc;
        text-decoration: line-through;
      `}
  }

  & + section {
    margin-top: 15px;
  }

  transition: transform 0.5s;

  &:hover {
    transform: translateX(5px);
  }
`;

export const ActionTypes = styled.section`
  display: flex;
  align-items: center;
`;
