import React from 'react';
import { useRouter } from 'next/router';
import { Container, Message, ResultMessageCorrect, ResultMessageIncorrect, UserAnswer, ImageContainer } from './ResultsStyle';
import Button from './Button';

interface Props {
  categoryQuestions: any[];
  answers: string[];
}

const Results: React.FC<Props> = ({ categoryQuestions, answers }) => {
  const router = useRouter();
  let correctAnswers = 0;
  const incorrectAnswers = [];

  answers.forEach((answer, index) => {
    if (answer === categoryQuestions[index].correctAnswer) {
      correctAnswers++;
    } else {
      incorrectAnswers.push({
        question: categoryQuestions[index].question,
        userAnswer: answer,
      });
    }
  });

  const handleChooseCategoryClick = () => {
    router.push('/category');
  };

  const thumbsDownImage = '/assets/thumbs-down.png';
  const okImage = '/assets/ok.png';
  const almostImage = '/assets/almost.png';
  const fireworksImage = '/assets/fireworks.png';

  let image;
  if (correctAnswers === 0) {
    image = thumbsDownImage;
  } else if (correctAnswers === categoryQuestions.length) {
    image = fireworksImage;
  } else if (correctAnswers > categoryQuestions.length / 2) {
    image = almostImage;
  } else {
    image = okImage;
  }

  return (
    <Container>
      <Message>Results</Message>
      <ResultMessageCorrect>
        Correct answers: {correctAnswers}/{categoryQuestions.length}
      </ResultMessageCorrect>
      {incorrectAnswers.length > 0 && (
        <>
          <ResultMessageIncorrect>Incorrect answers:</ResultMessageIncorrect>
          <ul>
            {incorrectAnswers.map((incorrectAnswer, index) => (
              <li key={index}>
                {incorrectAnswer.question} <UserAnswer>(Your answer: {incorrectAnswer.userAnswer})</UserAnswer>
              </li>
            ))}
          </ul>
        </>
      )}
      <ImageContainer>
        <img src={image} alt="Result" />
      </ImageContainer>
      <Button onClick={handleChooseCategoryClick}>Choose Category</Button>
    </Container>
  );
};

export default Results;
