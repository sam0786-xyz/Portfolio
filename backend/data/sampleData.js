const projects = [
  {
    title: "AI-Powered Image Recognition System",
    description: "A scalable computer vision system deployed on AWS",
    longDescription: "Built using state-of-the-art deep learning models...",
    category: "ai",
    technologies: ["TensorFlow", "AWS", "Python", "Docker"],
    image: "/images/projects/ai-vision.jpg",
    githubLink: "https://github.com/yourusername/project1",
    liveDemo: "https://demo.project1.com",
    featured: true,
    type: "major"
  },
  // Add more projects...
];

const certificates = [
  {
    title: "AWS Machine Learning Specialty",
    issuer: "Amazon Web Services",
    date: "2024",
    category: "cloud",
    skills: ["AWS SageMaker", "ML Ops", "Deep Learning"],
    image: "/images/certificates/aws-ml.jpg",
    link: "https://aws.amazon.com/certification/",
    icon: "FaAws"
  },
  // Add more certificates...
];

module.exports = { projects, certificates }; 