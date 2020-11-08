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
  handleDeleteTodo(id: number): void;
  handleToggleCompleteTodo(id: number): void;
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

  const handleGetTodosFromApi = useCallback(async () => {
    const { data } = await api.get('todos');

    const filterredTodos = data.map((todo: Request) => ({
      ...todo,
      is_completed: todo.is_completed === '1' ? true : false,
    }));

    setTodos(filterredTodos);
  }, []);

  useEffect(() => {
    handleGetTodosFromApi();
  }, [handleGetTodosFromApi]);

  const handleAddNewTodo = useCallback(
    async (todo_name: string): Promise<void> => {
      const { data } = await api.post('todos', {
        todo_name,
      });

      setTodos([...todos, data]);
    },
    [todos],
  );

  const handleDeleteTodo = useCallback(
    async (id: number) => {
      api.delete(`todos/${id}`);

      const filteredTodos = todos.filter(todo => todo.id !== id);

      setTodos(filteredTodos);
    },
    [todos],
  );

  const handleToggleCompleteTodo = useCallback(
    async (id: number) => {
      const findedTodo = todos.find(todo => todo.id === id);

      if (!findedTodo) return;

      api.put(`todos/${id}`, { is_completed: !findedTodo.is_completed });

      const filteredTodos = todos.map(todo =>
        todo.id === id ? { ...todo, is_completed: !todo.is_completed } : todo,
      );

      setTodos(filteredTodos);
    },
    [todos],
  );

  return (
    <TodoContext.Provider
      value={{
        todos,
        handleAddNewTodo,
        handleDeleteTodo,
        handleToggleCompleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = (): TodoContextData => {
  const context = useContext(TodoContext);

  if (!context) throw new Error('useTodo must be used within a TodoProvider');

  return context;
};
