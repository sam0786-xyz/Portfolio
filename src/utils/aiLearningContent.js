const content = {
  kids: {
    title: "Introduction to AI for Young Learners",
    content: `Artificial Intelligence (AI) is like teaching computers to think and learn, just like how you learn new things at school! 
    
    Imagine having a smart friend who can help you with homework, play games with you, and even create fun drawings. That's what AI can do!
    
    Let's learn about AI in a fun and simple way.`,
    quiz: [
      {
        question: "What is Artificial Intelligence?",
        answers: [
          "A robot that looks like a human",
          "Teaching computers to think and learn",
          "A video game",
          "A type of calculator"
        ],
        correct: 1
      },
      {
        question: "What can AI help us do?",
        answers: [
          "Only play games",
          "Only do math",
          "Many things like homework, drawing, and playing games",
          "Nothing useful"
        ],
        correct: 2
      },
      {
        question: "How does AI learn?",
        answers: [
          "By reading books",
          "By looking at lots of examples",
          "By magic",
          "It doesn't learn"
        ],
        correct: 1
      }
    ]
  },
  teens: {
    title: "AI & Machine Learning Fundamentals",
    content: `Artificial Intelligence (AI) and Machine Learning are transforming the world around us. From social media algorithms to voice assistants, AI is everywhere!

    Machine Learning is a type of AI that allows computers to learn from data without being explicitly programmed. It's like how you learn from experience, but for computers.
    
    Let's explore the basic concepts and see how they work.`,
    quiz: [
      {
        question: "What is Machine Learning?",
        answers: [
          "A type of computer programming",
          "Teaching computers to learn from data",
          "A type of robot",
          "Artificial memory for computers"
        ],
        correct: 1
      },
      {
        question: "Which of these uses AI?",
        answers: [
          "Social media recommendations",
          "Voice assistants like Siri",
          "Netflix show suggestions",
          "All of the above"
        ],
        correct: 3
      },
      {
        question: "How do machines learn?",
        answers: [
          "By analyzing patterns in data",
          "By reading books",
          "By talking to humans",
          "By copying other computers"
        ],
        correct: 0
      }
    ]
  },
  adults: {
    title: "Advanced AI & Deep Learning Concepts",
    content: `Deep Learning is a subset of Machine Learning that uses neural networks with multiple layers (deep neural networks) to analyze various factors of data.

    Modern AI applications use sophisticated architectures like Transformers, CNNs, and RNNs to process complex data types including text, images, and time series data.
    
    Let's dive into the technical aspects and real-world applications.`,
    quiz: [
      {
        question: "What is a key characteristic of Deep Learning?",
        answers: [
          "It requires less data than traditional ML",
          "It uses neural networks with multiple layers",
          "It only works with text data",
          "It's simpler than basic Machine Learning"
        ],
        correct: 1
      },
      {
        question: "Which architecture revolutionized Natural Language Processing?",
        answers: [
          "Transformers",
          "Basic Neural Networks",
          "Decision Trees",
          "Random Forests"
        ],
        correct: 0
      },
      {
        question: "What is a common application of CNNs?",
        answers: [
          "Text processing",
          "Sound analysis",
          "Image recognition",
          "Time series prediction"
        ],
        correct: 2
      }
    ]
  }
};

export const getContent = (age) => {
  if (age < 13) return content.kids;
  if (age < 18) return content.teens;
  return content.adults;
}; 