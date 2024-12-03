import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const api = {
  // Projects
  getProjects: async () => {
    try {
      const response = await axios.get(`${API_URL}/projects`);
      return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  },

  // Certificates
  getCertificates: async () => {
    try {
      const response = await axios.get(`${API_URL}/certificates`);
      return response.data;
    } catch (error) {
      console.error('Error fetching certificates:', error);
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