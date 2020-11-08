import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;

  /* border: 1px solid red; */
  padding: 15px;

  max-height: 400px;

  overflow-y: scroll;

  max-width: 900px;
  min-width: 300px;

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    border-radius: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;

    margin-top: 15px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);

    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;
