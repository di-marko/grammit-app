import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  selected?: boolean;
}

const StyledButton = styled.button`
  margin: 2.4rem 1rem 0 1rem;
  padding: 10px 20px;
  background: var(--background-color);
  border-radius: 200px;
  box-shadow: inset 0 0 15px rgba(55, 84, 170, 0), inset 0 0 20px rgba(255, 255, 255, 0),
    10px 10px 18px rgba(55, 84, 170, 0.15), -10px -10px 22px #fff, inset 0px 0px 4px rgba(255, 255, 255, 0.2);
  transition: 0.4s cubic-bezier(0, 0.57, 0.49, 1.51);
  cursor: pointer;

  &:hover {
    box-shadow: inset 7px 7px 15px rgba(55, 84, 170, 0.15), inset -7px -7px 20px #fff,
      0px 0px 4px rgba(255, 255, 255, 0.2), 5px 5px 22px #fff;
    transform: scale(0.95);
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
