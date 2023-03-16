import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Question = styled.h1`
  font-size: 36px;
`;

export const AnswersContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Answer = styled.div`
  margin: 10px;
  padding: 20px;
  background-color: #03a9f4;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;
