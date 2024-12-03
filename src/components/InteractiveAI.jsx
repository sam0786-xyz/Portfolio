import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBrain, FaRobot, FaChalkboardTeacher } from 'react-icons/fa';
import { llamaService } from '../services/llamaService';

function InteractiveAI() {
  const [userAge, setUserAge] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dynamicContent, setDynamicContent] = useState({
    title: '',
    topics: [],
    quiz: []
  });
  const [error, setError] = useState(null);

  const generateAgeAppropriateContent = async (age) => {
    setIsLoading(true);
    setError(null);
    try {
      const topics = age < 13 
        ? ['What is AI?', 'How do computers learn?', 'AI in everyday life']
        : age < 18
        ? ['Machine Learning Basics', 'Neural Networks', 'AI Applications']
        : ['Deep Learning', 'Transformer Architecture', 'AI Ethics'];

      const content = await Promise.all(
        topics.map(topic => llamaService.explainConcept(topic, age))
      );

      const quiz = await llamaService.generateQuiz(
        'Artificial Intelligence',
        age < 13 ? 'beginner' : age < 18 ? 'intermediate' : 'advanced'
      );

      setDynamicContent({
        title: `AI Learning Journey for ${age} year olds`,
        topics: topics.map((title, index) => ({
          title,
          content: content[index]
        })),
        quiz: quiz.questions || []
      });
    } catch (error) {
      console.error('Error generating content:', error);
      setError('Failed to generate content. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAgeSubmit = async (e) => {
    e.preventDefault();
    setShowContent(true);
    await generateAgeAppropriateContent(parseInt(userAge));
  };

  const startQuiz = () => {
    if (dynamicContent?.quiz?.length > 0) {
      setCurrentQuiz(0);
      setQuizAnswers({});
      setShowResults(false);
    }
  };

  const handleAnswer = (questionIndex, answerIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const submitQuiz = () => {
    if (Object.keys(quizAnswers).length === dynamicContent?.quiz?.length) {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    if (!dynamicContent?.quiz?.length) return 0;
    
    let correct = 0;
    dynamicContent.quiz.forEach((q, index) => {
      if (quizAnswers[index] === q.correct) correct++;
    });
    return Math.round((correct / dynamicContent.quiz.length) * 100);
  };

  const resetContent = () => {
    setShowContent(false);
    setCurrentQuiz(null);
    setQuizAnswers({});
    setShowResults(false);
    setDynamicContent({
      title: '',
      topics: [],
      quiz: []
    });
    setUserAge('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">Learn AI</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Interactive AI learning platform with hands-on examples
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        ) : !showContent ? (
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 dark:text-white">
              Interactive AI Learning Experience
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Please enter your age so we can provide age-appropriate AI learning content.
            </p>
            <form onSubmit={handleAgeSubmit} className="space-y-4">
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  value={userAge}
                  onChange={(e) => setUserAge(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500
                    dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  min="7"
                  max="100"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Start Learning
              </button>
            </form>
          </div>
        ) : dynamicContent?.topics?.length > 0 && currentQuiz === null ? (
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 dark:text-white">
              {dynamicContent.title}
            </h2>
            {dynamicContent.topics.map((topic, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold mb-4 dark:text-white">
                  {topic.title}
                </h3>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-gray-600 dark:text-gray-300">
                    {topic.content}
                  </p>
                </div>
              </div>
            ))}
            <button
              onClick={startQuiz}
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Take Quiz
            </button>
          </div>
        ) : !showResults && dynamicContent?.quiz?.length > 0 ? (
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 dark:text-white">Quiz</h2>
            <div className="space-y-6">
              {dynamicContent.quiz.map((question, qIndex) => (
                <div key={qIndex} className="space-y-4">
                  <p className="font-medium dark:text-white">{question.question}</p>
                  <div className="space-y-2">
                    {question.answers.map((answer, aIndex) => (
                      <button
                        key={aIndex}
                        onClick={() => handleAnswer(qIndex, aIndex)}
                        className={`w-full text-left p-3 rounded-lg transition-colors
                          ${quizAnswers[qIndex] === aIndex
                            ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                      >
                        {answer}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button
                onClick={submitQuiz}
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Submit Quiz
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 dark:text-white">Quiz Results</h2>
            <div className="text-center mb-6">
              <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                {calculateScore()}%
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {calculateScore() >= 70 ? 'Great job!' : 'Keep learning!'}
              </p>
            </div>
            <button
              onClick={resetContent}
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Try Another Topic
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default InteractiveAI; 