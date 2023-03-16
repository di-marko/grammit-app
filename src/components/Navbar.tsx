import React from 'react';
import { useRouter } from 'next/router';
import { NavbarContainer, NavbarLinks, NavbarLink } from './NavbarStyle';

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    if (router.pathname === '/quiz') {
      if (window.confirm('Are you sure you want to quit the quiz?')) {
        router.push('/');
      }
    } else {
      router.push('/');
    }
  };

  const handleLinkedInClick = () => {
    if (router.pathname === '/quiz') {
      if (window.confirm('Are you sure you want to quit the quiz?')) {
        window.open('https://www.linkedin.com/in/dmitri-mark%C3%A9lov/', '_blank');
      }
    } else {
      window.open('https://www.linkedin.com/in/dmitri-mark%C3%A9lov/', '_blank');
    }
  };

  return (
    <NavbarContainer>
      <NavbarLinks>
        <NavbarLink onClick={handleHomeClick}>Home</NavbarLink>
        <NavbarLink onClick={handleLinkedInClick}>LinkedIn</NavbarLink>
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;
