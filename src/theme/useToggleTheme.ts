import { createContext, useContext } from 'react';

const ThemeToggleContext = createContext(() => {});

export const useToggleTheme = () => useContext(ThemeToggleContext);

export default ThemeToggleContext;
