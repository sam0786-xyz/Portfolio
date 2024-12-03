import axios from 'axios';

const LLAMA_API_KEY = process.env.REACT_APP_LLAMA_API_KEY;
const LLAMA_API_URL = process.env.REACT_APP_LLAMA_API_URL;

if (!LLAMA_API_KEY) {
  console.error('LLAMA API key not found in environment variables');
}

export const llamaService = {
  async generateContent(prompt, options = {}) {
    try {
      const response = await axios.post(`${LLAMA_API_URL}/chat`, {
        api_key: LLAMA_API_KEY,
        messages: [{
          role: 'user',
          content: prompt
        }],
        stream: false,
        max_length: options.maxTokens || 500,
        temperature: options.temperature || 0.7,
        stop_sequences: ["Human:", "Assistant:"]
      });

      if (response.data && response.data.choices && response.data.choices[0]) {
        return response.data.choices[0].message.content;
      } else {
        console.log('Unexpected API response:', response.data);
        return 'I apologize, but I was unable to generate appropriate content at this time.';
      }
    } catch (error) {
      console.error('Error details:', error.response?.data || error.message);
      throw new Error('Failed to generate content: ' + (error.response?.data?.error || error.message));
    }
  },

  async generateQuiz(topic, difficulty) {
    const prompt = `Create a quiz about ${topic} suitable for ${difficulty} level students.
    The quiz should have 3 multiple choice questions.
    Format your response as a JSON object with this structure:
    {
      "questions": [
        {
          "question": "Question text here",
          "answers": ["Option 1", "Option 2", "Option 3", "Option 4"],
          "correct": 0 // Index of correct answer
        }
      ]
    }
    Make sure the response is valid JSON.`;

    try {
      const response = await this.generateContent(prompt, {
        temperature: 0.8,
        maxTokens: 800
      });

      try {
        const parsedResponse = JSON.parse(response);
        if (parsedResponse.questions && Array.isArray(parsedResponse.questions)) {
          return parsedResponse;
        } else {
          throw new Error('Invalid quiz format');
        }
      } catch (parseError) {
        console.error('Failed to parse quiz response:', response);
        return {
          questions: [
            {
              question: "What is the main purpose of AI?",
              answers: [
                "To simulate human intelligence",
                "To replace humans",
                "To play games",
                "To solve math problems"
              ],
              correct: 0
            },
            {
              question: "Which of these is a type of machine learning?",
              answers: [
                "Supervised learning",
                "Magic learning",
                "Instant learning",
                "Perfect learning"
              ],
              correct: 0
            },
            {
              question: "What is deep learning?",
              answers: [
                "Learning while sleeping",
                "Learning using neural networks",
                "Learning from books",
                "Learning from mistakes"
              ],
              correct: 1
            }
          ]
        };
      }
    } catch (error) {
      console.error('Quiz generation error:', error);
      throw error;
    }
  },

  async explainConcept(concept, ageGroup) {
    const prompt = `Explain ${concept} to someone who is ${ageGroup} years old.
    Use simple language and real-world examples that would be familiar to this age group.
    Keep the explanation engaging and educational.`;

    try {
      const response = await this.generateContent(prompt, {
        temperature: 0.7,
        maxTokens: 600
      });
      return response;
    } catch (error) {
      console.error('Concept explanation error:', error);
      return `${concept} is an important part of artificial intelligence. It helps computers learn and solve problems in smart ways.`;
    }
  }
}; 