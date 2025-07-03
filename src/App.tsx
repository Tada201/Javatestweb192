import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import DocumentationPage from './pages/DocumentationPage';
import ComponentsPage from './pages/ComponentsPage';
import CodePage from './pages/CodePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black flex flex-col relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-purple-500/10"></div>
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/documentation" element={<DocumentationPage />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/code" element={<CodePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;