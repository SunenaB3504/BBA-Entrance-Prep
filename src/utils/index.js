// src/utils/questionShuffler.js
export const shuffleArray = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const pickRandom = (arr, n) => shuffleArray(arr).slice(0, n);

// src/utils/scoreCalculator.js
export const calculateScore = (answers, questions) => {
  let correct = 0, wrong = 0, unattempted = 0;
  questions.forEach((q, i) => {
    if (answers[i] === undefined || answers[i] === null) unattempted++;
    else if (answers[i] === q.correct) correct++;
    else wrong++;
  });
  return { correct, wrong, unattempted, total: questions.length, percentage: Math.round((correct / questions.length) * 100) };
};

// src/utils/difficultyFilter.js
export const filterByDifficulty = (questions, level) => {
  if (!level || level === 'all') return questions;
  return questions.filter(q => q.difficulty === level);
};

// src/utils/examTagFilter.js
export const filterByExam = (questions, exam) => {
  if (!exam || exam === 'all') return questions;
  return questions.filter(q => q.examTags.includes(exam));
};
