import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export const api = {
  // Certificate Analysis
  analyzeCertificate: async (certificateData) => {
    try {
      const response = await axios.post(`${API_URL}/certificates/analyze`, certificateData);
      return response.data;
    } catch (error) {
      console.error('Error analyzing certificate:', error);
      throw error;
    }
  },

  // Contact Form
  submitContactForm: async (formData) => {
    try {
      const response = await axios.post(`${API_URL}/contact`, formData);
      return response.data;
    } catch (error) {
      console.error('Error submitting form:', error);
      throw error;
    }
  }
}; 