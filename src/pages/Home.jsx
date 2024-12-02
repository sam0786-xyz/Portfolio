import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">John Doe</h1>
          <p className="text-xl text-indigo-600 mb-6">Full Stack Developer</p>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              I'm a passionate developer with expertise in React, Node.js, and modern web technologies.
              My goal is to create impactful applications that solve real-world problems.
            </p>
            <p className="text-gray-600 mb-6">
              Currently focused on building accessible and performant web applications
              while exploring new technologies in the JavaScript ecosystem.
            </p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <img
            src="/your-profile-photo.jpg" // Add your photo here
            alt="Profile"
            className="rounded-lg shadow-lg w-full max-w-md mx-auto"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home; 