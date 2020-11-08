import React from 'react';

import { TodoProvider } from './todo';

const Providers: React.FC = ({ children }) => (
  <TodoProvider>{children}</TodoProvider>
);

export default Providers;
