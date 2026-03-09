import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SUBJECTS } from '../config/subjects.config';
import { useAppContext } from '../store/AppContext';

const Home = () => {
    const navigate = useNavigate();
    const { progress, getSubjectProgress } = useAppContext();

    return (
        <div className="container mx-auto px-4 py-8 lg:py-12">
            <header className="mb-12">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Ready for Success? 🚀
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                    Master the CUET & MH CET BBA entrance exams with focused chapter-wise study,
                    real-time analytics, and high-yield question banks.
                </p>
            </header>

            <section>
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                        <span>📚</span> Core Subjects
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SUBJECTS.map((subject) => {
                        const subjectProgress = getSubjectProgress(subject.id, subject.chapters);

                        return (
                            <button
                                key={subject.id}
                                onClick={() => navigate(`/subject/${subject.id}`)}
                                className="group relative bg-white p-6 rounded-2xl shadow-sm border border-slate-100 ring-1 ring-slate-100 transition-all hover:shadow-xl hover:-translate-y-1 text-left overflow-hidden"
                            >
                                {/* Decorative background accent */}
                                <div
                                    className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity -mr-8 -mt-8 rounded-full"
                                    style={{ backgroundColor: subject.color }}
                                />

                                <div className="relative z-10">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm border border-white"
                                        style={{ backgroundColor: `${subject.color}15`, border: `1px solid ${subject.color}20` }}
                                    >
                                        {subject.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {subject.name}
                                    </h3>

                                    <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                                        {subject.chapters.length} Chapters • {subject.examTags.join(' & ')}
                                    </p>

                                    {/* Progress Bar */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
                                            <span>Progress</span>
                                            <span className="text-slate-600">{subjectProgress}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full transition-all duration-1000 ease-out rounded-full"
                                                style={{
                                                    width: `${subjectProgress}%`,
                                                    backgroundColor: subject.color,
                                                    boxShadow: `0 0 10px ${subject.color}40`
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center text-sm font-bold text-slate-400 group-hover:text-blue-500 transition-colors">
                                    Start Learning <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Home;
