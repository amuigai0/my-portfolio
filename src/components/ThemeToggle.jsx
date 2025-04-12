import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
    >
      <span className="text-lg transform transition-transform duration-300">
        {theme === 'dark' ? '🌙' : '☀️'}
      </span>
      <span className="text-sm font-medium">
        {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;