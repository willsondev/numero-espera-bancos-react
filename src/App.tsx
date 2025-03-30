import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar';
import RequestTurn from './pages/RequestTurn';
import './App.css';
import { AuroraBackground } from "./components/ui/aurora-background";

function App() {
  return (
    <div className="min-h-screen">
      {/* Fondo decorativo Aurora (no interactivo) */}
      <AuroraBackground className="fixed inset-0 -z-10" />
      
      <Router>
        {/* Contenido principal centrado con ancho máximo */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          
          {/* Header */}
          <Header />
          
          {/* Layout principal (sidebar + contenido) */}
          <div className="flex flex-col md:flex-row  mt-6">
            
            {/* Sidebar (oculto en móvil, visible desde md) */}
            <Sidebar className="hidden md:block md:w-64" />
            
            {/* Área de contenido principal */}
            <main className="flex-1 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
              <Routes>
                <Route path="/" element={<RequestTurn />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;