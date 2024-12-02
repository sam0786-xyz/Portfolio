import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaAws, FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiKaggle } from 'react-icons/si';

function Certificates() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample certificates data
  const certificates = [
    {
      id: 1,
      title: "AWS Machine Learning Specialty",
      issuer: "Amazon Web Services",
      date: "2024",
      category: "cloud",
      skills: ["AWS SageMaker", "ML Ops", "Deep Learning"],
      image: "/certificates/aws-ml.jpg",
      link: "https://aws.amazon.com/certification/",
      icon: <FaAws className="text-[#FF9900]" size={24} />
    },
    {
      id: 2,
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2023",
      category: "ml",
      skills: ["Deep Learning", "Neural Networks", "Computer Vision"],
      image: "/certificates/tensorflow.jpg",
      link: "https://tensorflow.org/certificate",
      icon: <SiTensorflow className="text-[#FF6F00]" size={24} />
    },
    // Add more certificates...
  ];

  // Filter certificates based on search and category
  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || cert.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Categories for filter
  const categories = [
    { id: 'all', name: 'All Certificates' },
    { id: 'ml', name: 'Machine Learning', icon: <SiTensorflow /> },
    { id: 'cloud', name: 'Cloud Platforms', icon: <FaAws /> },
    { id: 'ai', name: 'Artificial Intelligence', icon: <SiPytorch /> },
  ];

  // Handle carousel auto-play
  useEffect(() => {
    if (viewMode === 'carousel') {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => 
          prev === filteredCertificates.length - 1 ? 0 : prev + 1
        );
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [viewMode, filteredCertificates.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">My Certificates</h1>
        <p className="text-gray-600">
          Professional certifications in Machine Learning, Cloud Computing, and AI
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search certificates or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* View Mode Toggle */}
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg ${
                viewMode === 'grid' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('carousel')}
              className={`px-4 py-2 rounded-lg ${
                viewMode === 'carousel' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Carousel
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors
                ${selectedCategory === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Certificates Display */}
      <AnimatePresence mode='wait'>
        {viewMode === 'grid' ? (
          // Grid View
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCertificates.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    {cert.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-gray-600 mb-2">Issued by: {cert.issuer}</p>
                  <p className="text-gray-500 mb-4">Date: {cert.date}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-indigo-100 text-indigo-800 text-sm px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    View Certificate →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          // Carousel View
          <motion.div
            key="carousel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative h-[600px] overflow-hidden rounded-xl"
          >
            <div className="absolute inset-0">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full mx-4">
                    <img
                      src={filteredCertificates[currentSlide].image}
                      alt={filteredCertificates[currentSlide].title}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    <h3 className="text-2xl font-semibold mb-4">
                      {filteredCertificates[currentSlide].title}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      {filteredCertificates[currentSlide].icon}
                      <span className="text-gray-600">
                        {filteredCertificates[currentSlide].issuer}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {filteredCertificates[currentSlide].skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <a
                      href={filteredCertificates[currentSlide].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      View Certificate
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {filteredCertificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Certificates; 