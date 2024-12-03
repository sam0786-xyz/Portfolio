import axios from 'axios';

const LLAMA_API_KEY = 'LA-b89ba571ba77457fb82231c7a4243297091cd7bb748448d0b25afcf4310ca371';
const LLAMA_API_URL = 'https://api.llama-api.com/v1';

export const llamaService = {
  async generateContent(prompt, options = {}) {
    try {
      const response = await axios.post(`${LLAMA_API_URL}/chat/completions`, {
        model: 'llama-2-70b-chat',
        messages: [{ role: 'user', content: prompt }],
        temperature: options.temperature || 0.7,
        max_tokens: options.maxTokens || 500,
      }, {
        headers: {
          'Authorization': `Bearer ${LLAMA_API_KEY}`,
          'Content-Type': 'application/json',
        }
      });

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Error calling Llama API:', error);
      throw error;
    }
  },

  async generateQuiz(topic, difficulty) {
    const prompt = `Generate a quiz about ${topic} with 3 multiple choice questions. 
    Difficulty level: ${difficulty}. 
    Format: JSON with structure { questions: [{ question: string, answers: string[], correct: number }] }`;

    try {
      const response = await this.generateContent(prompt);
      return JSON.parse(response);
    } catch (error) {
      console.error('Error generating quiz:', error);
      throw error;
    }
  },

  async explainConcept(concept, ageGroup) {
    const prompt = `Explain ${concept} in a way that a ${ageGroup} year old would understand. 
    Include real-world examples and analogies.`;

    try {
      return await this.generateContent(prompt);
    } catch (error) {
      console.error('Error generating explanation:', error);
      throw error;
    }
  }
}; 