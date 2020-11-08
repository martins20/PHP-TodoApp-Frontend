import styled from 'styled-components';

interface ErrorProps {
  isErrored: boolean;
}

export const Container = styled.input`
  width: 100%;

  background: transparent;
  border: 0;
  padding: 5px 15px 5px 5px;

  font-size: 1rem;
`;

export const Error = styled.b<ErrorProps>`
  opacity: ${props => (props.isErrored ? 1 : 0)};

  color: var(--red);
  font-size: 0.8rem;

  position: absolute;
  top: -20px;

  transition: opacity 0.3s;
`;
