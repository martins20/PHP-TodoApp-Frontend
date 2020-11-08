import React from 'react';

import GlobalStyle from './styles/global';

import Todo from './pages/Todo';

const App: React.FC = () => {
  return (
    <>
      <Todo />
      <GlobalStyle />
    </>
  );
};

export default App;
