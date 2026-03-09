import React from 'react';
import MCQCard from './MCQCard';

const QuestionRenderer = ({ question, selectedAnswer, onAnswer, isSubmitted }) => {
    if (!question) return null;

    switch (question.type) {
        case 'mcq':
            return (
                <MCQCard
                    question={question}
                    selectedAnswer={selectedAnswer}
                    onAnswer={onAnswer}
                    isSubmitted={isSubmitted}
                />
            );

        // Placeholder for other types - to be implemented in Phase 4/5
        case 'assertion-reason':
        case 'case-study':
        case 'match-column':
        case 'numerical':
            return (
                <div className="p-8 border-2 border-dashed border-slate-200 rounded-2xl text-center">
                    <div className="text-4xl mb-4">🛠️</div>
                    <h3 className="text-lg font-bold text-slate-700 mb-2">
                        {question.type.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Support Coming Soon
                    </h3>
                    <p className="text-slate-500">
                        This question type is currently under development. Please check back later!
                    </p>
                </div>
            );

        default:
            return (
                <div className="p-6 bg-red-50 text-red-600 rounded-xl border border-red-100">
                    Unknown question type: {question.type}
                </div>
            );
    }
};

export default QuestionRenderer;
