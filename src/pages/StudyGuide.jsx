import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../store/AppContext';
import { getSubjectById, getChapterById } from '../config/subjects.config';

const StudyGuide = () => {
    const { subjectId, chapterId } = useParams();
    const navigate = useNavigate();
    const { loadChapterData } = useAppContext();

    const [guideData, setGuideData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeSection, setActiveSection] = useState('concept');

    const subject = getSubjectById(subjectId);
    const chapter = getChapterById(subjectId, chapterId);

    useEffect(() => {
        const fetchContent = async () => {
            setIsLoading(true);
            const data = await loadChapterData(subjectId, chapterId);
            if (data && data.studyGuide) {
                setGuideData(data.studyGuide);
            }
            setIsLoading(false);
        };
        fetchContent();
    }, [subjectId, chapterId, loadChapterData]);

    if (isLoading) return <div className="h-screen flex items-center justify-center text-slate-400 font-medium">Loading Study Guide...</div>;

    if (!guideData) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-2xl font-bold text-slate-800 mb-4">Study guide not yet available for this chapter</h1>
                <button onClick={() => navigate(-1)} className="text-blue-600 hover:underline">Go Back</button>
            </div>
        );
    }

    const sections = [
        { id: 'concept', label: 'Core Concept', icon: '📖' },
        { id: 'formulas', label: 'Formula Bank', icon: '🧮' },
        { id: 'logic', label: 'Step-by-Step Logic', icon: '🧩' },
        { id: 'traps', label: 'Examiner Traps', icon: '⚠️' },
        { id: 'examples', label: 'Practical Examples', icon: '🎓' },
        { id: 'speed', label: 'Speed Summary', icon: '⚡' }
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Top Navigation */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors"
                    >
                        ← BACK TO DASHBOARD
                    </button>
                    <div className="flex items-center gap-3">
                        <span className="p-1.5 rounded-lg bg-orange-50 text-orange-600 text-lg">{subject.icon}</span>
                        <h1 className="font-bold text-slate-900 truncate max-w-[200px]">{chapter.name} Guide</h1>
                    </div>
                    <div className="w-24"></div> {/* Spacer */}
                </div>

                {/* Granular Sub-Nav */}
                <div className="bg-slate-50/50 border-t border-slate-100 overflow-x-auto">
                    <div className="container mx-auto px-4 flex">
                        {sections.map((sec) => (
                            <button
                                key={sec.id}
                                onClick={() => {
                                    setActiveSection(sec.id);
                                    document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                                className={`flex items-center gap-2 px-6 py-4 text-xs font-bold uppercase tracking-wider whitespace-nowrap border-b-2 transition-all ${activeSection === sec.id
                                        ? 'border-blue-600 text-blue-600 bg-white'
                                        : 'border-transparent text-slate-400 hover:text-slate-600'
                                    }`}
                            >
                                <span>{sec.icon}</span>
                                {sec.label}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 flex-grow max-w-4xl">
                {guideData.topics.map((topic, tIdx) => (
                    <div key={topic.id} className="mb-24 last:mb-0">
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-8 border-l-4 border-blue-600 pl-6">
                            {topic.title}
                        </h2>

                        <div className="space-y-12">
                            {/* 1. Core Concept */}
                            <section id="concept" className="scroll-mt-40">
                                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-800 mb-4">
                                    <span className="text-2xl">📖</span> Core Concept
                                </h3>
                                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm leading-relaxed text-slate-600 whitespace-pre-wrap">
                                    {topic.content.coreConcept}
                                </div>
                            </section>

                            {/* 2. Formula Bank */}
                            <section id="formulas" className="scroll-mt-40">
                                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-800 mb-4">
                                    <span className="text-2xl">🧮</span> The Formula Bank
                                </h3>
                                <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-lg shadow-blue-200">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 whitespace-pre-wrap">
                                        {topic.content.formulaBank}
                                    </div>
                                </div>
                            </section>

                            {/* 3. Step-by-Step Logic */}
                            <section id="logic" className="scroll-mt-40">
                                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-800 mb-4">
                                    <span className="text-2xl">🧩</span> Step-by-Step Logic
                                </h3>
                                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm leading-relaxed text-slate-600 whitespace-pre-wrap italic">
                                    {topic.content.logic}
                                </div>
                            </section>

                            {/* 4. Examiner Traps */}
                            <section id="traps" className="scroll-mt-40">
                                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-800 mb-4 text-red-600">
                                    <span className="text-2xl">⚠️</span> Examiner Traps
                                </h3>
                                <div className="bg-red-50 rounded-3xl p-8 border border-red-100 text-red-900 font-medium whitespace-pre-wrap">
                                    {topic.content.traps}
                                </div>
                            </section>

                            {/* 5. Practical Examples */}
                            <section id="examples" className="scroll-mt-40">
                                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-800 mb-6">
                                    <span className="text-2xl">🎓</span> Practical Examples
                                </h3>
                                <div className="space-y-4">
                                    {topic.content.examples.map((ex, exIdx) => (
                                        <div key={exIdx} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
                                            <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Example {exIdx + 1}</div>
                                            <div className="text-lg font-bold text-slate-900 mb-4">Q: {ex.q}</div>
                                            <div className="bg-green-50 text-green-800 p-4 rounded-xl font-mono text-sm">
                                                <span className="font-bold">Solution:</span> {ex.a}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 6. Speed Summary */}
                            <section id="speed" className="scroll-mt-40">
                                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-800 mb-4">
                                    <span className="text-2xl">⚡</span> Speed Summary (MAH-CET)
                                </h3>
                                <div className="bg-slate-900 rounded-3xl p-8 text-slate-300 font-medium whitespace-pre-wrap border-t-4 border-orange-500">
                                    {topic.content.speedSummary}
                                </div>
                            </section>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default StudyGuide;
