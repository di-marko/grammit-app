import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Message = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

export const ResultMessageIncorrect = styled.h2`
  font-size: 24px;
  margin-top: 20px;
  color: red;
`;

export const ResultMessageCorrect = styled.h2`
  color: green;
`;

export const UserAnswer = styled.span`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
`;

export const ImageContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;

  img {
    height: 100%;
    object-fit: cover;
  }
`;
