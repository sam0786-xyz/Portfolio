import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length > 100) {
      newErrors.name = 'Name is too long';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 1000) {
      newErrors.message = 'Message is too long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('sending');

    try {
      // Add your form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      setStatus('error');
      setErrors({ submit: 'Failed to send message. Please try again.' });
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-gray-600">
            I'm always open to new opportunities and collaborations.
            Feel free to reach out!
          </p>
          
          <div className="flex flex-col space-y-4">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center text-gray-600 hover:text-indigo-600"
            >
              <FaEnvelope className="mr-2" /> your.email@example.com
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-indigo-600"
            >
              <FaGithub className="mr-2" /> GitHub Profile
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-indigo-600"
            >
              <FaLinkedin className="mr-2" /> LinkedIn Profile
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50 }}
          animate={{ x: 0 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                maxLength={100}
                required
                className={`mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500
                  ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500
                  ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                maxLength={1000}
                required
                className={`mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500
                  ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
              <p className="mt-1 text-sm text-gray-500">
                {formData.message.length}/1000 characters
              </p>
            </div>

            {errors.submit && (
              <p className="text-red-600 text-center">{errors.submit}</p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors
                ${status === 'sending' ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'sent' && (
              <p className="text-green-600 text-center">Message sent successfully!</p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact; 