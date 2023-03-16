import React, { useState } from 'react';
import Quiz from '../components/Quiz';
import questions from '../data/questions';
import Results from '../components/Results';
import { useRouter } from 'next/router';

const QuizPage: React.FC = () => {
  const router = useRouter();
  const { category } = router.query;
  if (!category) {
    router.push('/category');
    return null;
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const categoryQuestions = questions.filter((question) => question.category === category);

  const handleAnswerClick = (answer: string) => {
    setAnswers([...answers, answer]);
    if (currentQuestion === categoryQuestions.length - 1) {
      setIsQuizCompleted(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return isQuizCompleted ? (
    <Results categoryQuestions={categoryQuestions} answers={answers} />
  ) : (
    <Quiz
      question={categoryQuestions[currentQuestion].question}
      answers={categoryQuestions[currentQuestion].answers}
      onAnswerClick={handleAnswerClick}
    />
  );
};

export default QuizPage;
