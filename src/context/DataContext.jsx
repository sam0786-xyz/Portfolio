import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, certificatesData] = await Promise.all([
          api.getProjects(),
          api.getCertificates()
        ]);
        setProjects(projectsData);
        setCertificates(certificatesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ 
      projects, 
      certificates, 
      loading, 
      error,
      setProjects,
      setCertificates 
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
} 