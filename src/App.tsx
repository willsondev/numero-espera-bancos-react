
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import RequestTurn from './pages/RequestTurn.jsx';
import { AuroraBackground } from "./components/ui/aurora-background";
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <AuroraBackground className="fixed inset-0 -z-10">
        <Router>
          <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Header />
            <div className="flex flex-col md:flex-row gap-6 mt-6">
              <Sidebar className="hidden md:block md:w-64" />
              <main className="flex-1 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
                <Routes>
                  <Route path="/" element={<RequestTurn />} />
                </Routes>
              </main>
            </div>
          </div>
        </Router>
      </AuroraBackground>
    </div>
  );
}

export default App;