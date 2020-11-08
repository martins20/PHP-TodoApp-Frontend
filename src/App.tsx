import React from 'react';

import GlobalStyle from './styles/global';

import Todo from './pages/Todo';
import Providers from './hooks';

const App: React.FC = () => {
  return (
    <>
      <Providers>
        <Todo />
      </Providers>
      <GlobalStyle />
    </>
  );
};

export default App;
