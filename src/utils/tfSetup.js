import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';

export async function initializeTensorFlow() {
  try {
    // Set backend to WebGL for better performance
    await tf.setBackend('webgl');
    // Enable debug mode in development
    if (process.env.NODE_ENV === 'development') {
      tf.env().set('DEBUG', true);
    }
    console.log('TensorFlow.js initialized with backend:', tf.getBackend());
  } catch (error) {
    console.error('Error initializing TensorFlow:', error);
  }
} 