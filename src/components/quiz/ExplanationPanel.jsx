import React from 'react';

const ExplanationPanel = ({ question, isCorrect, nextQuestion, isLast }) => {
    return (
        <div className={`mt-8 p-6 rounded-2xl border-2 transition-all animate-in slide-in-from-bottom-4 duration-300
      ${isCorrect ? 'bg-green-50 border-green-100' : 'bg-orange-50 border-orange-100'}
    `}>
            <div className="flex items-start gap-4 mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0
          ${isCorrect ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}
        `}>
                    {isCorrect ? '✅' : '💡'}
                </div>
                <div>
                    <h3 className={`text-lg font-bold ${isCorrect ? 'text-green-800' : 'text-orange-800'}`}>
                        {isCorrect ? 'Correct Answer!' : 'Keep Learning'}
                    </h3>
                    <p className={`text-sm ${isCorrect ? 'text-green-600' : 'text-orange-600'}`}>
                        {isCorrect
                            ? 'Great job! You master this concept.'
                            : `The correct answer is: ${question.options[question.correct]}`
                        }
                    </p>
                </div>
            </div>

            <div className="text-slate-700 leading-relaxed bg-white/50 p-4 rounded-xl border border-slate-100/50 mb-6">
                <div className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">Explanation</div>
                {question.explanation}
            </div>

            <button
                onClick={nextQuestion}
                className={`w-full py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg
          ${isCorrect
                        ? 'bg-green-600 hover:bg-green-700 text-white shadow-green-200'
                        : 'bg-orange-600 hover:bg-orange-700 text-white shadow-orange-200'}
        `}
            >
                {isLast ? 'See Results →' : 'Next Question →'}
            </button>
        </div>
    );
};

export default ExplanationPanel;
