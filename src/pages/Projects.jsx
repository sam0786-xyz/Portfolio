import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaAws, FaPython } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiOpenai, SiKubernetes, SiDocker } from 'react-icons/si';
import { useData } from '../context/DataContext';

function Projects() {
  const { projects, loading, error } = useData();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Project categories
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'cloud', name: 'Cloud Projects' },
    { id: 'ai', name: 'AI & Deep Learning' },
  ];

  // Filter projects based on category
  const filteredProjects = {
    major: projects.filter(project => 
      selectedCategory === 'all' || project.category === selectedCategory
    ),
    mini: projects.filter(project => 
      selectedCategory === 'all' || project.category === selectedCategory
    )
  };

  // Project detail modal
  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
          >
            ×
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4 dark:text-white">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 whitespace-pre-line">
            {project.longDescription || project.description}
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
            >
              <FaGithub /> View Code
            </a>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">My Projects</h1>
        <p className="text-gray-600 dark:text-gray-300">
          A collection of my work in Machine Learning, Cloud Computing, and AI
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full transition-colors
              ${selectedCategory === category.id
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Major Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.major.map(project => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.icons.map((icon, index) => (
                    <div key={index} className="bg-white p-2 rounded-full shadow">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Learn More →
                  </button>
                  <div className="flex gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mini Projects */}
      <section>
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Mini Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredProjects.mini.map(project => (
            <motion.div
              key={project.id}
              whileHover={{ y: -3 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold dark:text-white">{project.title}</h3>
                <div className="flex gap-2">
                  {project.icons.map((icon, index) => (
                    <div key={index}>{icon}</div>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects; 