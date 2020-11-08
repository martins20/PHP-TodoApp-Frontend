import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';

import ITodoDTO from '../dtos/ITodoDTO';
import api from '../services/api';

interface TodoContextData {
  todos: ITodoDTO[];
  handleAddNewTodo(todo_name: string): Promise<void>;
}

interface Request {
  id: number;
  todo_name: string;
  is_completed: '1' | '0';
  created_at?: string;
}

const TodoContext = createContext<TodoContextData>({} as TodoContextData);

export const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<ITodoDTO[]>([]);

  useEffect(() => {
    handleGetTodosFromApi();
  }, []);

  const handleGetTodosFromApi = useCallback(async () => {
    const { data } = await api.get('/todos');

    const filterredTodos = data.map((todo: Request) => ({
      ...todo,
      is_completed: todo.is_completed === '1' ? true : false,
    }));

    setTodos(filterredTodos);
  }, []);

  const handleAddNewTodo = useCallback(
    async (todo_name: string): Promise<void> => {
      const { data } = await api.post('/todos', {
        todo_name,
      });

      setTodos([...todos, data]);
    },
    [todos],
  );

  return (
    <TodoContext.Provider value={{ todos, handleAddNewTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = (): TodoContextData => {
  const context = useContext(TodoContext);

  if (!context) throw new Error('useTodo must be used within a TodoProvider');

  return context;
};
