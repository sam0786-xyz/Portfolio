import { createContext, useContext, useState } from 'react';
import { mlService } from '../services/mlService';

const MLContext = createContext();

export function MLProvider({ children }) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [error, setError] = useState(null);

  const analyzeCertificate = async (certificateData) => {
    setIsAnalyzing(true);
    setError(null);
    try {
      const results = await mlService.analyzeCertificate(certificateData);
      setAnalysisResults(results);
    } catch (error) {
      setError('Failed to analyze certificate');
      console.error(error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <MLContext.Provider value={{ 
      isAnalyzing, 
      analysisResults, 
      error,
      analyzeCertificate 
    }}>
      {children}
    </MLContext.Provider>
  );
}

export function useML() {
  return useContext(MLContext);
} 