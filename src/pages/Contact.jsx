import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaAws, 
  FaDocker,
  FaPython
} from 'react-icons/fa';
import { 
  SiTensorflow, 
  SiPytorch, 
  SiGooglecloud, 
  SiMicrosoftazure 
} from 'react-icons/si';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  // Social and professional links
  const links = [
    {
      name: 'GitHub',
      url: 'https://github.com/sam0786-xyz',
      icon: <FaGithub size={24} />,
      color: 'hover:text-gray-800'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/connect-to-sam-xyz',
      icon: <FaLinkedin size={24} />,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      url: 'mailto:sam0786.xyz@icloud.com',
      icon: <FaEnvelope size={24} />,
      color: 'hover:text-red-600'
    }
  ];

  // Professional profiles
  const profiles = [
    {
      name: 'AWS Certified',
      url: 'https://aws.amazon.com/certification/',
      icon: <FaAws size={24} />,
      color: 'hover:text-[#FF9900]'
    },
    {
      name: 'Google Cloud',
      url: 'https://cloud.google.com/certification',
      icon: <SiGooglecloud size={24} />,
      color: 'hover:text-[#4285F4]'
    },
    {
      name: 'Azure',
      url: 'https://azure.microsoft.com/certifications/',
      icon: <SiMicrosoftazure size={24} />,
      color: 'hover:text-[#0089D6]'
    }
  ];

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

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 1000) {
      newErrors.message = 'Message is too long (max 1000 characters)';
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
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
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
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-600">
            Let's discuss ML projects, cloud solutions, or any other opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
              <div className="flex flex-wrap gap-4">
                {links.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-600 ${link.color} transition-colors p-3 bg-gray-100 rounded-lg`}
                    whileHover={{ y: -2 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Professional Profiles</h2>
              <div className="flex flex-wrap gap-4">
                {profiles.map((profile, index) => (
                  <motion.a
                    key={index}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-600 ${profile.color} transition-colors p-3 bg-gray-100 rounded-lg`}
                    whileHover={{ y: -2 }}
                  >
                    {profile.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Technical Expertise</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <SiTensorflow className="mx-auto text-[#FF6F00]" size={32} />
                  <span className="text-sm mt-1 block">TensorFlow</span>
                </div>
                <div className="text-center">
                  <SiPytorch className="mx-auto text-[#EE4C2C]" size={32} />
                  <span className="text-sm mt-1 block">PyTorch</span>
                </div>
                <div className="text-center">
                  <FaPython className="mx-auto text-[#3776AB]" size={32} />
                  <span className="text-sm mt-1 block">Python</span>
                </div>
                <div className="text-center">
                  <FaDocker className="mx-auto text-[#2496ED]" size={32} />
                  <span className="text-sm mt-1 block">Docker</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50 }}
            animate={{ x: 0 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md shadow-sm
                    ${errors.name ? 'border-red-500' : 'border-gray-300'}
                    focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
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
                  className={`mt-1 block w-full rounded-md shadow-sm
                    ${errors.email ? 'border-red-500' : 'border-gray-300'}
                    focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md shadow-sm
                    ${errors.subject ? 'border-red-500' : 'border-gray-300'}
                    focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md shadow-sm
                    ${errors.message ? 'border-red-500' : 'border-gray-300'}
                    focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
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
                className={`w-full bg-indigo-600 text-white px-4 py-2 rounded-lg
                  hover:bg-indigo-700 transition-colors
                  ${status === 'sending' ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'sent' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-600 text-center"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact; 