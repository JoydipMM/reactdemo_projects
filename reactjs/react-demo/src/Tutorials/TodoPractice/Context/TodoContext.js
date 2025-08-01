import { useContext, createContext } from 'react';

export const TodoContext = createContext();

export const TodoContextProvider = TodoContext.Provider;

export const useTodoContext = () => useContext(TodoContext);