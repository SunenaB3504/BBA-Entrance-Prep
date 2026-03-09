import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SubjectDashboard from './pages/SubjectDashboard.jsx';
import QuizPage from './pages/QuizPage.jsx';
import MockDashboard from './pages/MockDashboard.jsx';
import MockExamSimulator from './pages/MockExamSimulator.jsx';
import StudyGuide from './pages/StudyGuide.jsx';
import { useAppContext } from './store/AppContext.jsx';

const App = () => {
    const { streak } = useAppContext();

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navigation */}
            <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="text-2xl">🚀</span>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            Commerce Prep Pro
                        </span>
                    </Link>

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
                </Routes>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-slate-100 py-8">
                <div className="container mx-auto px-4 text-center text-slate-400 text-sm">
                    &copy; 2026 Commerce Prep Pro. Focused on CUET & MH-CET success.
                </div>
            </footer>
        </div>
    );
};

export default App;
