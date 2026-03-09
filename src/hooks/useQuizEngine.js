// src/hooks/useQuizEngine.js
import { useState, useCallback } from 'react';
import { calculateScore } from '../utils/index';

export const useQuizEngine = (questions = []) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const isAnswered = answers[currentIndex] !== undefined;

  const selectAnswer = useCallback((optionIndex) => {
    if (isSubmitted) return;
    setAnswers(prev => ({ ...prev, [currentIndex]: optionIndex }));
    setShowExplanation(true);
  }, [currentIndex, isSubmitted]);

  const next = useCallback(() => {
    setShowExplanation(false);
    setCurrentIndex(i => Math.min(i + 1, questions.length - 1));
  }, [questions.length]);

  const prev = useCallback(() => {
    setShowExplanation(false);
    setCurrentIndex(i => Math.max(i - 1, 0));
  }, []);

  const goTo = useCallback((index) => {
    setShowExplanation(false);
    setCurrentIndex(index);
  }, []);

  const submit = useCallback(() => setIsSubmitted(true), []);
  const reset = useCallback(() => {
    setCurrentIndex(0);
    setAnswers({});
    setIsSubmitted(false);
    setShowExplanation(false);
  }, []);

  const results = isSubmitted ? calculateScore(answers, questions) : null;

  return {
    currentQuestion, currentIndex, answers, isSubmitted,
    showExplanation, isLast, isAnswered, results,
    selectAnswer, next, prev, goTo, submit, reset,
    progress: questions.length ? Math.round(((currentIndex + 1) / questions.length) * 100) : 0
  };
};
