import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';
import * as tfconv from '@tensorflow/tfjs-converter';
import * as tflayers from '@tensorflow/tfjs-layers';

class MLService {
  constructor() {
    this.model = null;
    this.initialized = false;
    this.initTF();
  }

  async initTF() {
    try {
      await tf.setBackend('webgl');
      console.log('TensorFlow.js initialized with backend:', tf.getBackend());
    } catch (error) {
      console.error('Error initializing TensorFlow:', error);
    }
  }

  async initialize() {
    try {
      // Simple model for testing
      this.model = tflayers.sequential({
        layers: [
          tflayers.layers.conv2d({
            inputShape: [224, 224, 3],
            kernelSize: 3,
            filters: 16,
            activation: 'relu'
          }),
          tflayers.layers.globalAveragePooling2d(),
          tflayers.layers.dense({ units: 10, activation: 'softmax' })
        ]
      });
      
      this.initialized = true;
      console.log('ML Model initialized');
    } catch (error) {
      console.error('Error initializing ML model:', error);
      throw error;
    }
  }

  async analyzeCertificate(imageData) {
    if (!this.initialized) {
      await this.initialize();
    }

    try {
      // For testing purposes, return mock results
      return {
        skills: ['Machine Learning', 'Cloud Computing', 'Data Science'],
        confidence: 0.95
      };
    } catch (error) {
      console.error('Error analyzing certificate:', error);
      throw error;
    }
  }

  preprocessImage(imageData) {
    return tf.tidy(() => {
      let tensor = tf.browser.fromPixels(imageData)
        .resizeNearestNeighbor([224, 224])
        .toFloat();
      
      // Normalize the image
      const offset = tf.scalar(127.5);
      tensor = tensor.sub(offset).div(offset);
      
      // Add batch dimension
      return tensor.expandDims(0);
    });
  }

  processResults(prediction) {
    // Mock results for testing
    return {
      skills: ['Machine Learning', 'Cloud Computing', 'Data Science'],
      confidence: 0.95
    };
  }
}

export const mlService = new MLService(); 