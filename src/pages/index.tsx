import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Button from '../components/Button';

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const WelcomeMessage = styled.h1`
  font-size: 36px;
`;

const Home: NextPage = () => {
  const router = useRouter();

  const handleStartPractice = () => {
    router.push('/category');
  };

  return (
    <WelcomeContainer>
      <WelcomeMessage>Welcome to the Gammit App!</WelcomeMessage>
      <Button onClick={handleStartPractice}>Start Practice</Button>
    </WelcomeContainer>
  );
};

export default Home;
