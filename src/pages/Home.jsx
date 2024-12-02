import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaAws, FaCloud, FaArrowRight, FaDocker, FaPython, FaJava, FaChartBar, FaChartLine } from 'react-icons/fa';
import { SiGooglecloud, SiMicrosoftazure, SiTensorflow, SiPytorch, SiNumpy, SiPandas, SiScikitlearn, SiCanva, SiTableau, SiPowerbi, SiJupyter, SiC } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import profilePic from '../assets/dp.jpg';

function Home() {
  const navigate = useNavigate();
  const [currentCertificate, setCurrentCertificate] = useState(0);

  // Sample certificates data (you can move this to a separate file)
  const certificates = [
    {
      id: 1,
      title: "AWS Machine Learning Specialty",
      issuer: "Amazon Web Services",
      date: "2024",
      icon: <FaAws className="text-[#FF9900]" size={24} />,
      image: "/certificates/aws-ml.jpg"
    },
    {
      id: 2,
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2023",
      icon: <SiTensorflow className="text-[#FF6F00]" size={24} />,
      image: "/certificates/tensorflow.jpg"
    },
    // Add more certificates...
  ];

  // Auto-rotate certificates
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCertificate((prev) => 
        prev === certificates.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [certificates.length]);

  // Add this section before the Career Goals section
  const technicalExpertiseSection = (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mb-16 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-8 dark:text-white text-center">Technical Expertise</h2>
      
      {/* Programming Languages */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">
          💻 Programming Languages
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8">
          <motion.div 
            className="text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <FaPython className="mx-auto text-[#3776AB] dark:text-[#4786BB] hover:scale-110 transition-transform" size={40} />
            <span className="text-sm mt-3 block dark:text-gray-300 font-medium">Python</span>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <FaJava className="mx-auto text-[#007396] dark:text-[#1084A7] hover:scale-110 transition-transform" size={40} />
            <span className="text-sm mt-3 block dark:text-gray-300 font-medium">Java</span>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <SiC className="mx-auto text-[#A8B9CC] dark:text-[#B8C9DC] hover:scale-110 transition-transform" size={40} />
            <span className="text-sm mt-3 block dark:text-gray-300 font-medium">C</span>
          </motion.div>
        </div>
      </div>

      {/* ML & Data Science */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">
          🧠 ML & Data Science
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8">
          <motion.div 
            className="text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <SiTensorflow className="mx-auto text-[#FF6F00] dark:text-[#FF8F00] hover:scale-110 transition-transform" size={40} />
            <span className="text-sm mt-3 block dark:text-gray-300 font-medium">TensorFlow</span>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <SiPytorch className="mx-auto text-[#EE4C2C] dark:text-[#FF5C3C] hover:scale-110 transition-transform" size={40} />
            <span className="text-sm mt-3 block dark:text-gray-300 font-medium">PyTorch</span>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <SiNumpy className="mx-auto text-[#013243] dark:text-[#114253] hover:scale-110 transition-transform" size={40} />
            <span className="text-sm mt-3 block dark:text-gray-300 font-medium">NumPy</span>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <SiPandas className="mx-auto text-[#150458] dark:text-[#251468] hover:scale-110 transition-transform" size={40} />
            <span className="text-sm mt-3 block dark:text-gray-300 font-medium">Pandas</span>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <FaChartBar className="mx-auto text-[#11557C] dark:text-[#21658C] hover:scale-110 transition-transform" size={40} />
            <span className="text-sm mt-3 block dark:text-gray-300 font-medium">Matplotlib</span>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <FaChartLine className="mx-auto text-[#4C72B0] dark:text-[#5C82C0] hover:scale-110 transition-transform" size={40} />
            <span className="text-sm mt-3 block dark:text-gray-300 font-medium">Seaborn</span>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <SiScikitlearn className="mx-auto text-[#F7931E] dark:text-[#FFA32E] hover:scale-110 transition-transform" size={40} />
            <span className="text-sm mt-3 block dark:text-gray-300 font-medium">Scikit-learn</span>
          </motion.div>
        </div>
      </div>

      {/* Cloud & DevOps */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">
          ☁️ Cloud & DevOps
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8">
          <motion.div 
            className="text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <FaAws className="mx-auto text-[#FF9900] dark:text-[#FFA910] hover:scale-110 transition-transform" size={40} />
            <span className="text-sm mt-3 block dark:text-gray-300 font-medium">AWS</span>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <SiGooglecloud className="mx-auto text-[#4285F4] dark:text-[#5295FF] hover:scale-110 transition-transform" size={40} />
            <span className="text-sm mt-3 block dark:text-gray-300 font-medium">Google Cloud</span>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <SiMicrosoftazure className="mx-auto text-[#0089D6] dark:text-[#1099E6] hover:scale-110 transition-transform" size={40} />
            <span className="text-sm mt-3 block dark:text-gray-300 font-medium">Azure</span>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <FaDocker className="mx-auto text-[#2496ED] dark:text-[#34A6FD] hover:scale-110 transition-transform" size={40} />
            <span className="text-sm mt-3 block dark:text-gray-300 font-medium">Docker</span>
          </motion.div>
        </div>
      </div>

      {/* Visualization Tools */}
      <div>
        <h3 className="text-xl font-semibold mb-6 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">
          📊 Visualization Tools
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8">
          <motion.div 
            className="text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <SiCanva className="mx-auto text-[#00C4CC] dark:text-[#10D4DC] hover:scale-110 transition-transform" size={40} />
            <span className="text-sm mt-3 block dark:text-gray-300 font-medium">Canva</span>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <SiTableau className="mx-auto text-[#E97627] dark:text-[#F98637] hover:scale-110 transition-transform" size={40} />
            <span className="text-sm mt-3 block dark:text-gray-300 font-medium">Tableau</span>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <SiPowerbi className="mx-auto text-[#F2C811] dark:text-[#FFD821] hover:scale-110 transition-transform" size={40} />
            <span className="text-sm mt-3 block dark:text-gray-300 font-medium">Power BI</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  // Add this section after the Career Goals section
  const certificateSection = (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mt-16"
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold dark:text-gray-100">Featured Certificates</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/certificates')}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          View All Certificates <FaArrowRight />
        </motion.button>
      </div>

      <div className="relative h-[300px] bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        {/* Certificate Carousel */}
        <motion.div
          key={currentCertificate}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 p-6"
        >
          <div className="grid md:grid-cols-2 gap-6 h-full">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                {certificates[currentCertificate].icon}
                <h3 className="text-xl font-semibold dark:text-white">
                  {certificates[currentCertificate].title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Issued by: {certificates[currentCertificate].issuer}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Date: {certificates[currentCertificate].date}
              </p>
            </div>
            <div className="relative h-full">
              <img
                src={certificates[currentCertificate].image}
                alt={certificates[currentCertificate].title}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Carousel Controls */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCertificate(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentCertificate === index 
                  ? 'bg-indigo-600' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to certificate ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 dark:text-white">Mohammad Sameer</h1>
          <p className="text-xl text-indigo-600 dark:text-indigo-400 mb-6">ML Engineer & Cloud Architect</p>
          <div className="prose max-w-none mb-6 space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              🚀 Member of team selected by ISRO & URSC in a rover building competition, qualifying for the Quals round 2024.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300">
              🏆 Proud achiever of Round 2 in Mobile Robotics at the Junior Skills Championship 2021, jointly organized by the National Skill Development Corporation (NSDC) & Central Board of Secondary Education (CBSE).
            </p>
            
            <p className="text-gray-600 dark:text-gray-300">
              💡 Proficient in the basics of AWS, Google Cloud Platform and Microsoft Azure.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300">
              🔍 Continuously building upon skills and knowledge to stay ahead in the ever-evolving landscape of technology, aiming to be future-ready for challenges and opportunities in AI and beyond.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4 mb-8">
            <a 
              href="https://github.com/sam0786-xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/connect-to-sam-xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="mailto:sam0786.xyz@icloud.com"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          {/* Cloud Platform Expertise */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Cloud Expertise</h2>
            <div className="flex space-x-6">
              <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                <FaAws size={32} className="text-[#FF9900] mb-2 mx-auto" />
                <span className="text-sm dark:text-gray-300">AWS</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                <SiGooglecloud size={32} className="text-[#4285F4] mb-2 mx-auto" />
                <span className="text-sm dark:text-gray-300">GCP</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                <SiMicrosoftazure size={32} className="text-[#0089D6] mb-2 mx-auto" />
                <span className="text-sm dark:text-gray-300">Azure</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <img
            src={profilePic}
            alt="Mohammad Sameer"
            className="rounded-lg shadow-lg w-full max-w-md mx-auto object-cover"
          />
        </motion.div>
      </div>

      {/* Expertise Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
      >
        {/* ML Expertise */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 dark:text-white">Machine Learning</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Deep Learning Models</li>
            <li>• Natural Language Processing</li>
            <li>• Computer Vision</li>
            <li>• MLOps & Model Deployment</li>
          </ul>
        </div>

        {/* Generative AI */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 dark:text-white">Generative AI</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Large Language Models</li>
            <li>• Text-to-Image Generation</li>
            <li>• Prompt Engineering</li>
            <li>• AI Model Fine-tuning</li>
          </ul>
        </div>

        {/* Cloud Engineering */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 dark:text-white">Cloud Engineering</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Serverless Architecture</li>
            <li>• Container Orchestration</li>
            <li>• CI/CD Pipelines</li>
            <li>• Cloud Cost Optimization</li>
          </ul>
        </div>
      </motion.div>

      {/* Technical Expertise Section */}
      {technicalExpertiseSection}

      {/* Career Goals */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">Career Goals</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Dedicated to pushing the boundaries of AI and cloud technologies. My goal is to develop innovative solutions 
          that make AI more accessible and impactful across industries.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Currently focused on:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
          <li>Developing scalable ML solutions on cloud platforms</li>
          <li>Research in generative AI applications</li>
          <li>Contributing to open-source ML projects</li>
        </ul>
      </motion.div>

      {certificateSection}
    </motion.div>
  );
}

export default Home; 