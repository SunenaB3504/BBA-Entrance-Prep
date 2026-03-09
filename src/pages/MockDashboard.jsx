import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../store/AppContext';
import Badges from '../components/profile/Badges';

const MockDashboard = () => {
    const navigate = useNavigate();
    const { mockResults } = useAppContext();

    const mockTypes = [
        // ... (rest of the file)
        {
            id: 'cuet-full',
            name: 'CUET Full Mock',
            description: 'Section III: General Test simulator. 60 questions, 60 minutes.',
            icon: '📜',
            duration: 60,
            questionCount: 60,
            color: 'from-blue-500 to-indigo-600'
        },
        {
            id: 'mhcet-full',
            name: 'MH-CET Full Mock',
            description: 'Comprehensive speed-drill simulator. 200 questions, 150 minutes.',
            icon: '⚡',
            duration: 150,
            questionCount: 200,
            color: 'from-orange-500 to-red-600'
        },
        {
            id: 'rapid-fire',
            name: 'Rapid Fire Drill',
            description: 'High-speed practice on mixed GAT topics. 30 questions, 15 minutes.',
            icon: '🔥',
            duration: 15,
            questionCount: 30,
            color: 'from-purple-500 to-pink-600'
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <header className="mb-12">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Exam Simulator</h1>
                <p className="text-slate-600">Prepare for the real deal with our timed mock tests.</p>
            </header>

            <div className="mb-12">
                <Badges />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {mockTypes.map((mock) => (
                    <div
                        key={mock.id}
                        className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all group pointer-events-auto cursor-pointer"
                        onClick={() => navigate(`/mock-exam/${mock.id}`)}
                    >
                        <div className={`h-32 bg-gradient-to-br ${mock.color} flex items-center justify-center text-5xl group-hover:scale-110 transition-transform`}>
                            {mock.icon}
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{mock.name}</h3>
                            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                                {mock.description}
                            </p>
                            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-400">
                                <span>{mock.questionCount} Questions</span>
                                <span>{mock.duration} Mins</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {mockResults.length > 0 && (
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Recent Performance</h2>
                    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Test Type</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Date</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Score</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Accuracy</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {mockResults.map((result, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900">{result.type}</td>
                                        <td className="px-6 py-4 text-slate-500">{new Date(result.date).toLocaleDateString()}</td>
                                        <td className="px-6 py-4">
                                            <span className="font-bold text-blue-600">{result.score}</span>
                                            <span className="text-slate-400 text-xs ml-1">/{result.totalPossible}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-green-500"
                                                        style={{ width: `${result.accuracy}%` }}
                                                    />
                                                </div>
                                                <span className="text-sm font-medium text-slate-700">{result.accuracy}%</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            )}
        </div>
    );
};

export default MockDashboard;
