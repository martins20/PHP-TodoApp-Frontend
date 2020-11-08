import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  padding: 50px 0;

  align-items: center;

  > h1 {
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 3rem;
    color: var(--cyan);
  }
`;
