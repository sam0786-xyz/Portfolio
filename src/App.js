import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import InteractiveAI from './components/InteractiveAI';
import { MLProvider } from './context/MLContext';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <MLProvider>
          <Router>
            <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/certificates" element={<Certificates />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/learn" element={<InteractiveAI />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </MLProvider>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
