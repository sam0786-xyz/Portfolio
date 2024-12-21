import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex-1 text-gray-600 dark:text-gray-300">
              <p className="text-center flex items-center justify-center">
                Made with <FaHeart className="text-red-500 mx-1" /> by Mohammad Sameer
            </p>
          </div>
          <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -2 }}
                href="https://github.com/sam0786-xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="https://www.linkedin.com/in/connect-to-sam-xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <FaLinkedin size={24} />
              </motion.a>
            </div>
      </div>
    </footer>
  );
}

export default Footer;