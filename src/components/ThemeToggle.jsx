import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 
        hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-900"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <FaSun className="w-5 h-5 text-yellow-500" />
      ) : (
        <FaMoon className="w-5 h-5 text-gray-600" />
      )}
    </motion.button>
  );
}

export default ThemeToggle; 