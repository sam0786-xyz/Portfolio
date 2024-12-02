import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBrain, FaRobot, FaChalkboardTeacher } from 'react-icons/fa';

function InteractiveAI() {
  const [userAge, setUserAge] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  // Content adapted based on age groups
  const getContent = (age) => {
    if (age < 15) {
      return {
        title: "Introduction to AI for Young Minds",
        description: "Let's learn about Artificial Intelligence in a fun way!",
        concepts: [
          {
            title: "What is AI?",
            content: "AI is like teaching computers to think and learn, just like how you learn new things at school!",
            example: "When you play video games, the characters that aren't controlled by players use AI to make decisions.",
          },
          {
            title: "Machine Learning",
            content: "Imagine teaching a computer by showing it lots of examples, just like how you learn by practicing!",
            example: "When you teach a computer to recognize cats by showing it many pictures of cats.",
          }
        ],
        quiz: [
          {
            question: "What does AI help computers do?",
            options: ["Think and learn", "Only play games", "Only solve math", "Make sandwiches"],
            correct: 0
          },
          {
            question: "How does a computer learn to recognize pictures?",
            options: ["By looking at many examples", "By reading books", "By asking questions", "By playing games"],
            correct: 0
          }
        ]
      };
    } else if (age < 25) {
      return {
        title: "Machine Learning Fundamentals",
        description: "Explore the core concepts of Machine Learning and AI",
        concepts: [
          {
            title: "Neural Networks",
            content: "Neural networks are computing systems inspired by biological neural networks in human brains.",
            example: "Deep learning models used in image recognition and natural language processing.",
          },
          {
            title: "Supervised Learning",
            content: "A type of machine learning where the model learns from labeled training data.",
            example: "Email spam detection systems learning from previously classified emails.",
          }
        ],
        quiz: [
          {
            question: "What inspired the creation of neural networks?",
            options: ["Human brain", "Computer circuits", "Mathematics", "Physics"],
            correct: 0
          },
          {
            question: "What is supervised learning?",
            options: [
              "Learning from labeled data",
              "Learning without data",
              "Learning from unlabeled data",
              "Learning from experiments"
            ],
            correct: 0
          }
        ]
      };
    } else {
      return {
        title: "Advanced Machine Learning Concepts",
        description: "Deep dive into advanced ML algorithms and architectures",
        concepts: [
          {
            title: "Deep Learning Architectures",
            content: "Study of complex neural network architectures including CNNs, RNNs, and Transformers.",
            example: "BERT and GPT models in natural language processing.",
          },
          {
            title: "Reinforcement Learning",
            content: "Learning through interaction with an environment using rewards and penalties.",
            example: "AlphaGo learning to play Go through millions of self-played games.",
          }
        ],
        quiz: [
          {
            question: "Which model architecture revolutionized NLP?",
            options: ["Transformer", "Simple Neural Network", "Decision Tree", "Linear Regression"],
            correct: 0
          },
          {
            question: "What is the key concept in reinforcement learning?",
            options: [
              "Learning through rewards and penalties",
              "Learning through supervision",
              "Learning through examples",
              "Learning through rules"
            ],
            correct: 0
          }
        ]
      };
    }
  };

  const handleAgeSubmit = (e) => {
    e.preventDefault();
    setShowContent(true);
    setCurrentQuiz(null);
    setQuizAnswers({});
    setShowResults(false);
  };

  const startQuiz = () => {
    setCurrentQuiz(0);
    setQuizAnswers({});
    setShowResults(false);
  };

  const handleAnswer = (questionIndex, answerIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const submitQuiz = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    const content = getContent(parseInt(userAge));
    let correct = 0;
    content.quiz.forEach((q, index) => {
      if (quizAnswers[index] === q.correct) correct++;
    });
    return (correct / content.quiz.length) * 100;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        {!showContent ? (
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Interactive AI Learning Experience
            </h2>
            <form onSubmit={handleAgeSubmit} className="max-w-sm mx-auto">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Enter your age to get personalized ML content:
                </label>
                <input
                  type="number"
                  value={userAge}
                  onChange={(e) => setUserAge(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                  min="5"
                  max="100"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Start Learning
              </button>
            </form>
          </motion.div>
        ) : (
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentQuiz !== null ? 'quiz' : 'content'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              {currentQuiz === null ? (
                // Content Display
                <>
                  <h2 className="text-2xl font-bold mb-6">
                    {getContent(parseInt(userAge)).title}
                  </h2>
                  <p className="text-gray-600 mb-8">
                    {getContent(parseInt(userAge)).description}
                  </p>
                  
                  {getContent(parseInt(userAge)).concepts.map((concept, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="mb-8 p-6 bg-gray-50 rounded-lg"
                    >
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <FaBrain className="text-indigo-600" />
                        {concept.title}
                      </h3>
                      <p className="text-gray-700 mb-4">{concept.content}</p>
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <p className="text-sm text-indigo-800">
                          <strong>Example:</strong> {concept.example}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  
                  <button
                    onClick={startQuiz}
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Take Quiz
                  </button>
                </>
              ) : (
                // Quiz Display
                <>
                  {!showResults ? (
                    <>
                      <h3 className="text-xl font-bold mb-6">
                        Question {currentQuiz + 1} of {getContent(parseInt(userAge)).quiz.length}
                      </h3>
                      <div className="mb-6">
                        <p className="text-lg mb-4">
                          {getContent(parseInt(userAge)).quiz[currentQuiz].question}
                        </p>
                        <div className="space-y-3">
                          {getContent(parseInt(userAge)).quiz[currentQuiz].options.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => handleAnswer(currentQuiz, index)}
                              className={`w-full p-3 text-left rounded-lg transition-colors ${
                                quizAnswers[currentQuiz] === index
                                  ? 'bg-indigo-600 text-white'
                                  : 'bg-gray-100 hover:bg-gray-200'
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between">
                        {currentQuiz > 0 && (
                          <button
                            onClick={() => setCurrentQuiz(prev => prev - 1)}
                            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                          >
                            Previous
                          </button>
                        )}
                        {currentQuiz < getContent(parseInt(userAge)).quiz.length - 1 ? (
                          <button
                            onClick={() => setCurrentQuiz(prev => prev + 1)}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                            disabled={quizAnswers[currentQuiz] === undefined}
                          >
                            Next
                          </button>
                        ) : (
                          <button
                            onClick={submitQuiz}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                            disabled={Object.keys(quizAnswers).length !== getContent(parseInt(userAge)).quiz.length}
                          >
                            Submit Quiz
                          </button>
                        )}
                      </div>
                    </>
                  ) : (
                    // Quiz Results
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center"
                    >
                      <h3 className="text-2xl font-bold mb-4">Quiz Results</h3>
                      <div className="mb-6">
                        <p className="text-4xl font-bold text-indigo-600 mb-2">
                          {calculateScore()}%
                        </p>
                        <p className="text-gray-600">
                          {calculateScore() >= 70 
                            ? "Great job! You've mastered these concepts!"
                            : "Keep learning! Try reviewing the concepts again."}
                        </p>
                      </div>
                      <div className="space-x-4">
                        <button
                          onClick={() => setShowContent(false)}
                          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                        >
                          Start Over
                        </button>
                        <button
                          onClick={() => {
                            setCurrentQuiz(null);
                            setQuizAnswers({});
                            setShowResults(false);
                          }}
                          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                        >
                          Review Concepts
                        </button>
                      </div>
                    </motion.div>
                  )}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </div>
  );
}

export default InteractiveAI; 