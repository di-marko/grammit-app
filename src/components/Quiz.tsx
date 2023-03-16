import React, { useState } from 'react';
import { Container, Question, AnswersContainer } from './QuizStyle';
import Button from './Button';

interface Props {
  question: string;
  answers: string[];
  onAnswerClick: (answer: string) => void;
}

const Quiz: React.FC<Props> = ({ question, answers, onAnswerClick }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  return (
    <Container>
      <Question>{question}</Question>
      <AnswersContainer>
        {answers.map((answer) => (
          <Button
            key={answer}
            selected={selectedAnswer === answer}
            onClick={() => {
              setSelectedAnswer(answer);
              onAnswerClick(answer);
            }}
          >
            {answer}
          </Button>
        ))}
      </AnswersContainer>
    </Container>
  );
};

export default Quiz;
