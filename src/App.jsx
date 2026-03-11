import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SubjectDashboard from './pages/SubjectDashboard.jsx';
import QuizPage from './pages/QuizPage.jsx';
import MockDashboard from './pages/MockDashboard.jsx';
import MockExamSimulator from './pages/MockExamSimulator.jsx';
import StudyGuide from './pages/StudyGuide.jsx';
import Flashcards from './pages/Flashcards.jsx';
import { useAppContext } from './store/AppContext.jsx';

const App = () => {
    const { streak } = useAppContext();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navigation */}
            <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
                        <span className="text-2xl">🚀</span>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            Commerce Prep Pro
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                        <Link to="/" className="hover:text-blue-600">Home</Link>
                        <Link to="/mocks" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Mock Tests
                        </Link>
                        <div className="flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-700 rounded-full border border-orange-100">
                            <span className="text-lg">🔥</span>
                            <span className="font-bold">{streak} Day Streak</span>
                        </div>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-slate-100 transition-colors gap-1"
                        onClick={() => setMobileMenuOpen(prev => !prev)}
                        aria-label="Toggle menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                        <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                        <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                    </button>
                </div>

                {/* Mobile Slide-down Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-64 border-t border-slate-100' : 'max-h-0'}`}>
                    <div className="container mx-auto px-4 py-3 flex flex-col gap-2 text-sm font-medium">
                        <Link
                            to="/"
                            onClick={closeMobileMenu}
                            className="py-2.5 px-3 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-colors flex items-center gap-2"
                        >
                            🏠 <span>Home</span>
                        </Link>
                        <Link
                            to="/mocks"
                            onClick={closeMobileMenu}
                            className="py-2.5 px-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                        >
                            🧪 <span>Mock Tests</span>
                        </Link>
                        <div className="py-2.5 px-3 rounded-xl bg-orange-50 text-orange-700 border border-orange-100 flex items-center gap-2">
                            <span className="text-base">🔥</span>
                            <span className="font-bold">{streak} Day Streak</span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/subject/:subjectId" element={<SubjectDashboard />} />
                    <Route path="/quiz/:subjectId/:chapterId" element={<QuizPage />} />
                    <Route path="/mocks" element={<MockDashboard />} />
                    <Route path="/mock-exam/:type" element={<MockExamSimulator />} />
                    <Route path="/study/:subjectId/:chapterId" element={<StudyGuide />} />
                    <Route path="/flashcards/:subjectId/:chapterId" element={<Flashcards />} />
                </Routes>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-slate-100 py-8">
                <div className="container mx-auto px-4 text-center text-slate-400 text-sm">
                    &copy; 2026 Commerce Prep Pro. Focused on CUET &amp; MH-CET success.
                </div>
            </footer>
        </div>
    );
};

export default App;
