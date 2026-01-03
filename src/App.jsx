import React, { useState } from 'react';
import LandingPage from './components/pages/LandingPage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import PatientHomePage from './components/pages/PatientHomePage';
import DoctorHomePage from './components/pages/DoctorHomePage';
import SymptomTestPage from './components/pages/SymptomTestPage';
import XRayUploadPage from './components/pages/XRayUploadPage';
import TestResultPage from './components/pages/TestResultPage';
import TestHistoryPage from './components/pages/TestHistoryPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');

  const handleLogout = () => {
    setCurrentPage('landing');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'login':
        return <LoginPage onNavigate={setCurrentPage} />;
      case 'signup':
        return <SignupPage onNavigate={setCurrentPage} />;
      case 'patient-home':
        return <PatientHomePage onNavigate={setCurrentPage} onLogout={handleLogout} />;
      case 'doctor-home':
        return <DoctorHomePage onNavigate={setCurrentPage} onLogout={handleLogout} />;
      case 'symptom-test':
        return <SymptomTestPage onNavigate={setCurrentPage} />;
      case 'xray-upload':
        return <XRayUploadPage onNavigate={setCurrentPage} />;
      case 'test-result':
        return <TestResultPage onNavigate={setCurrentPage} />;
      case 'test-history':
        return <TestHistoryPage onNavigate={setCurrentPage} />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/30 to-black text-white">
      {renderPage()}

      {/* Social Media Footer - Always Visible */}
      <footer className="glass-hover border-t border-white/20 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">

            {/* Team Name */}
            <div className="flex flex-col items-center lg:items-start space-y-4 flex-shrink-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                RespireX TB Team
              </h3>
              <p className="text-sm text-gray-400 max-w-md">
                BlockChain  Club | VIT Bhopal | TB Detection
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-6">
              {/* GitHub */}
              <a
                href="https://github.com/bitbash-vit/respirex-tb"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
                title="GitHub Repo"
              >
                <svg className="w-7 h-7 fill-current text-gray-300 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.058-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.176 2.873.171 3.176.768.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/blockchain-vit"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-blue-500/20 hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
                title="LinkedIn"
              >
                <svg className="w-7 h-7 fill-current text-gray-300 group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
                </svg>
              </a>

              {/* Mail - Team Contact */}
              <a
                href="mailto:codewithyash124@gmail.com,azhaanalisiddiqui15@gmail.com,padma.24bsa10137@vitbhopal.ac.in,bhav.24bsa10145@vitbhopal.ac.in,bhavsimar39@gmail.com?subject=RespireX%20TB%20Hackathon"
                className="group relative p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-red-500/20 hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25"
                title="Team Emails"
              >
                <svg className="w-7 h-7 fill-current text-gray-300 group-hover:text-red-400 transition-colors" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>

            {/* Team Emails List */}
            <div className="flex flex-col sm:flex-row gap-2 flex-wrap justify-center lg:justify-end">
              <a href="mailto:codewithyash124@gmail.com" className="text-xs bg-gradient-to-r from-cyan-500/30 to-blue-500/30 px-3 py-1 rounded-full border border-white/20 hover:bg-cyan-500/50 transition-all text-cyan-300 hover:text-white">
                codewithyash124@gmail.com
              </a>
              <a href="mailto:azhaanalisiddiqui15@gmail.com" className="text-xs bg-gradient-to-r from-emerald-500/30 to-teal-500/30 px-3 py-1 rounded-full border border-white/20 hover:bg-emerald-500/50 transition-all text-emerald-300 hover:text-white">
                azhaanalisiddiqui15@gmail.com
              </a>
              <a href="mailto:padma.24bsa10137@vitbhopal.ac.in" className="text-xs bg-gradient-to-r from-purple-500/30 to-violet-500/30 px-3 py-1 rounded-full border border-white/20 hover:bg-purple-500/50 transition-all text-purple-300 hover:text-white">
                padma.24bsa10137@vitbhopal.ac.in
              </a>
              <a href="mailto:bhav.24bsa10145@vitbhopal.ac.in" className="text-xs bg-gradient-to-r from-orange-500/30 to-amber-500/30 px-3 py-1 rounded-full border border-white/20 hover:bg-orange-500/50 transition-all text-orange-300 hover:text-white">
                bhav.24bsa10145@vitbhopal.ac.in
              </a>
              <a href="mailto:bhavsimar39@gmail.com" className="text-xs bg-gradient-to-r from-pink-500/30 to-rose-500/30 px-3 py-1 rounded-full border border-white/20 hover:bg-pink-500/50 transition-all text-pink-300 hover:text-white">
                bhavsimar39@gmail.com
              </a>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-xs text-gray-500">
              © 2026 RespireX TB | Built by BlockChain Club, VIT Bhopal [memory:1][memory:5]
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .glass-hover {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(20px);
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.3); }
          50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.6); }
        }
      `}</style>
    </div>
  );
};

export default App;